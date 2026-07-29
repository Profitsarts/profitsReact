#!/usr/bin/env zsh
# -------------------------------------------------
# Wrapper to launch Cline with Ollama Pro credentials
# -------------------------------------------------
# Load API key from the Ollama config file
if [ -f "${HOME}/.ollama/config.json" ]; then
  export OLLAMA_API_KEY="$(jq -r .api_key "${HOME}/.ollama/config.json")"
else
  echo "❌ No Ollama config found at ${HOME}/.ollama/config.json"
  exit 1
fi

# Set the Ollama cloud host
export OLLAMA_HOST="https://api.ollama.com"

# Ensure the global npm bin directory is in PATH
export PATH="/opt/homebrew/bin:$PATH"

# Launch Cline UI (change to `cline` if you prefer the CLI)
cline ui