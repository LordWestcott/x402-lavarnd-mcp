import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";
import type { Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { withPaymentInterceptor } from "x402-axios";
import { config } from "dotenv";
import { openApiSchema } from "./context/open-api-schema.js";

// Load environment variables and throw an error if any are missing
config();

const privateKey = process.env.PRIVATE_KEY as Hex;
const baseURL = 'https://lavarnd.up.railway.app/'


if (!privateKey || !baseURL) {
  throw new Error("Missing environment variables");
}

// Create a wallet client to handle payments
const account = privateKeyToAccount(privateKey);

// Create an axios client with payment interceptor using x402-axios
const client = withPaymentInterceptor(axios.create({ baseURL }), account);

// Create an MCP server
const server = new McpServer({
  name: "x402 MCP Client Demo",
  version: "1.0.0",
});

// Helper function to convert OpenAPI parameter schema to MCP tool parameter schema
function convertParameterSchema(param: any): any {
  const schema: any = {};
  
  if (param.schema.type === 'integer') {
    schema.type = 'integer';
    if (param.schema.minimum !== undefined) schema.minimum = param.schema.minimum;
    if (param.schema.maximum !== undefined) schema.maximum = param.schema.maximum;
    if (param.schema.default !== undefined) schema.default = param.schema.default;
  } else if (param.schema.type === 'number') {
    schema.type = 'number';
    if (param.schema.minimum !== undefined) schema.minimum = param.schema.minimum;
    if (param.schema.maximum !== undefined) schema.maximum = param.schema.maximum;
    if (param.schema.default !== undefined) schema.default = param.schema.default;
  } else if (param.schema.type === 'boolean') {
    schema.type = 'boolean';
    if (param.schema.default !== undefined) schema.default = param.schema.default;
  } else if (param.schema.type === 'string') {
    schema.type = 'string';
    if (param.schema.enum) schema.enum = param.schema.enum;
    if (param.schema.default !== undefined) schema.default = param.schema.default;
  }
  
  return schema;
}

// Register tools for all endpoints in the OpenAPI schema
for (const [path, pathItem] of Object.entries(openApiSchema.paths)) {
  const getOperation = (pathItem as any).get;
  if (!getOperation) continue;
  
  const operationId = getOperation.operationId;
  const summary = getOperation.summary || getOperation.description;
  const description = getOperation.description || summary;
  const parameters = getOperation.parameters || [];
  
  // Build parameter schema for MCP tool
  const properties: Record<string, any> = {};
  const required: string[] = [];
  
  for (const param of parameters) {
    if (param.in === 'query') {
      properties[param.name] = {
        ...convertParameterSchema(param),
        description: param.description,
      };
      if (param.required) {
        required.push(param.name);
      }
    }
  }
  
  const toolSchema: any = {
    type: 'object',
    properties,
  };
  if (required.length > 0) {
    toolSchema.required = required;
  }
  
  // Register the tool
  server.registerTool(
    operationId,
    {
      title: summary,
      description: description,
      inputSchema: toolSchema,
    },
    async (args: any) => {
      // Build query string from parameters
      const queryParams = new URLSearchParams();
      for (const [key, value] of Object.entries(args || {})) {
        if (value !== undefined && value !== null) {
          // Handle different value types properly
          let stringValue: string;
          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            stringValue = String(value);
          } else {
            stringValue = JSON.stringify(value);
          }
          queryParams.append(key, stringValue);
        }
      }
      
      const queryString = queryParams.toString();
      const endpointPath = queryString ? `${path}?${queryString}` : path;
      
      const res = await client.get(endpointPath);
      return {
        content: [{ type: "text" as const, text: JSON.stringify(res.data, null, 2) }],
      };
    },
  );
}

const transport = new StdioServerTransport();
await server.connect(transport);