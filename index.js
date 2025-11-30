import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";
import { privateKeyToAccount } from "viem/accounts";
import { withPaymentInterceptor } from "x402-axios";
import { config } from "dotenv";
import { openApiSchema } from "./context/open-api-schema.js";
import * as z from "zod";
// Load environment variables and throw an error if any are missing
config();
const privateKey = process.env.PRIVATE_KEY;
const baseURL = 'https://lavarnd.up.railway.app/';
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
// Helper function to convert OpenAPI parameter schema to Zod schema
function convertParameterToZod(param) {
    const schema = param.schema;
    if (schema.type === 'integer') {
        let zodSchema = z.number().int();
        if (schema.minimum !== undefined)
            zodSchema = zodSchema.min(schema.minimum);
        if (schema.maximum !== undefined)
            zodSchema = zodSchema.max(schema.maximum);
        if (schema.default !== undefined)
            zodSchema = zodSchema.default(schema.default);
        return zodSchema;
    }
    else if (schema.type === 'number') {
        let zodSchema = z.number();
        if (schema.minimum !== undefined)
            zodSchema = zodSchema.min(schema.minimum);
        if (schema.maximum !== undefined)
            zodSchema = zodSchema.max(schema.maximum);
        if (schema.default !== undefined)
            zodSchema = zodSchema.default(schema.default);
        return zodSchema;
    }
    else if (schema.type === 'boolean') {
        let zodSchema = z.boolean();
        if (schema.default !== undefined)
            zodSchema = zodSchema.default(schema.default);
        return zodSchema;
    }
    else if (schema.type === 'string') {
        let zodSchema;
        if (schema.enum) {
            zodSchema = z.enum(schema.enum);
        }
        else {
            zodSchema = z.string();
        }
        if (schema.default !== undefined)
            zodSchema = zodSchema.default(schema.default);
        return zodSchema;
    }
    // Fallback to any if type is unknown
    return z.any();
}
// Register tools for all endpoints in the OpenAPI schema
for (const [path, pathItem] of Object.entries(openApiSchema.paths)) {
    const getOperation = pathItem.get;
    if (!getOperation)
        continue;
    const operationId = getOperation.operationId;
    const summary = getOperation.summary || getOperation.description;
    const description = getOperation.description || summary;
    const parameters = getOperation.parameters || [];
    // Build Zod schema for MCP tool
    const zodProperties = {};
    for (const param of parameters) {
        if (param.in === 'query') {
            let zodSchema = convertParameterToZod(param);
            if (param.description) {
                zodSchema = zodSchema.describe(param.description);
            }
            if (param.required) {
                zodProperties[param.name] = zodSchema;
            }
            else {
                zodProperties[param.name] = zodSchema.optional();
            }
        }
    }
    // Register the tool
    server.registerTool(operationId, {
        title: summary,
        description: description,
        inputSchema: zodProperties,
    }, async (args) => {
        // Build query string from parameters
        const queryParams = new URLSearchParams();
        for (const [key, value] of Object.entries(args || {})) {
            if (value !== undefined && value !== null) {
                // Handle different value types properly
                let stringValue;
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    stringValue = String(value);
                }
                else {
                    stringValue = JSON.stringify(value);
                }
                queryParams.append(key, stringValue);
            }
        }
        const queryString = queryParams.toString();
        const endpointPath = queryString ? `${path}?${queryString}` : path;
        const res = await client.get(endpointPath);
        return {
            content: [{ type: "text", text: JSON.stringify(res.data, null, 2) }],
        };
    });
}
const transport = new StdioServerTransport();
await server.connect(transport);
//# sourceMappingURL=index.js.map