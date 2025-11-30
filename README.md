## Setup

### Install Dependencies
```bash
npm install
```

### Build the Project
```bash
npm run build
```

### Environment Variables
Create a `.env` file in the project root with:
```
PRIVATE_KEY=your_private_key_here
```

## Add the MCP Server to Claude Desktop

To use this integration with Claude Desktop:

1. **Option 1: Use npm (Recommended if pnpm is not installed)**
   
   Open Claude Desktop and go to MCP settings. Add a new MCP server with the following config:
   ```json
   {
     "mcpServers": {
       "lavarnd": {
         "command": "npm",
         "args": [
           "run",
           "start",
           "--prefix",
           "<absolute path to this repo>"
         ],
         "env": {
           "PRIVATE_KEY": "<private key of a wallet with USDC on Base>"
         }
       }
     }
   }
   ```

2. **Option 2: Use pnpm (If you prefer pnpm)**
   
   First, enable corepack and install pnpm:
   ```bash
   corepack enable
   corepack prepare pnpm@latest --activate
   ```
   
   Then use this configuration:
   ```json
   {
     "mcpServers": {
       "lavarnd": {
         "command": "pnpm",
         "args": [
           "--silent",
           "-C",
           "<absolute path to this repo>",
           "start"
         ],
         "env": {
           "PRIVATE_KEY": "<private key of a wallet with USDC on Base>"
         }
       }
     }
   }
   ```

3. Make sure you've built the project (`npm run build`) before starting Claude Desktop.
4. Claude can now call the tools and receive paid data from the LavaRND API!
