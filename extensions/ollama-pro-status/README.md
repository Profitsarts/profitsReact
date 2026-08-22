# Ollama Pro Status

Shows Ollama Cloud Pro consumption in the Antigravity/VS Code status bar.

## Features

- 📊 Shows session and weekly usage percentages in the status bar
- 🔄 Auto-refreshes every 60 seconds (configurable)
- 🖱️ Click for detailed breakdown (per-model request counts, cost)
- 🔑 Reads API key from settings or `~/.ollama/config.json`

## Installation

### Option A: Symlink (recommended)

```bash
# Create symlink to your extensions folder
ln -s /Users/condres/Dev/Projects/Profits_portfolio-2026/extensions/ollama-pro-status \
  ~/.vscode/extensions/ollama-pro-status
```

For Antigravity, use the appropriate extensions path:
```bash
# Antigravity extensions path (adjust if different)
ln -s /Users/condres/Dev/Projects/Profits_portfolio-2026/extensions/ollama-pro-status \
  ~/.antigravity/extensions/ollama-pro-status
```

### Option B: Copy

```bash
cp -r /Users/condres/Dev/Projects/Profits_portfolio-2026/extensions/ollama-pro-status \
  ~/.vscode/extensions/ollama-pro-status
```

## Configuration

1. Open Settings (`Cmd+,`)
2. Search for "Ollama Pro Status"
3. Set your API key (from https://ollama.com/account)

Or add to `settings.json`:
```json
{
  "ollamaProStatus.apiKey": "your-api-key-here",
  "ollamaProStatus.refreshInterval": 60
}
```

If no API key is set, the extension will try to read it from `~/.ollama/config.json`.

## Usage

- Status bar shows: `🔥 S:6.7% W:2.3%`
- Click the status bar item to see detailed usage
- Run `Ollama Pro: Refresh Usage` command to manually refresh