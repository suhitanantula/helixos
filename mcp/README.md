# HelixOS MCP Server

Cloudflare Worker entrypoint: [server.ts](/Users/suhitanantula/.codex/worktrees/9762/suhitanantula-site/helixos/mcp/server.ts)

## Tools

- `list_frameworks()`
- `get_framework(name: string)`
- `list_books()`
- `run_9q_diagnostic(answers: Record<string, string>)`

## Data Source

The server fetches its catalogs from:

- `https://os.suhitanantula.com/api/frameworks.json`
- `https://os.suhitanantula.com/api/books.json`

Override the base URL at runtime with `HELIXOS_DATA_BASE_URL`.

## Deploy

```bash
cd helixos/mcp
npm install
npm run deploy
```
