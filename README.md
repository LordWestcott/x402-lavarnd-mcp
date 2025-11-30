## Add the MCP Server to Claude Desktop
To use this integration with Claude Desktop:

1. Open Claude Desktop and go to MCP settings.
2. Add a new MCP server with the following config (adjust paths as needed):
```json
{
  "mcpServers": {
    "demo": {
      "command": "pnpm",
      "args": [
        "--silent",
        "-C",
        "<absolute path to this repo>",
        "dev"
      ],
      "env": {
        "PRIVATE_KEY": "<private key of a wallet with USDC on Base>",
      }
    }
  }
}
```

 3. Make sure your x402-compatible server (e.g., the sample express server) is running and accessible at the URL you provided.
 4. Start the MCP client (e.g., with pnpm dev in the client directory).
 5. Claude can now call the tool and receive paid data!
