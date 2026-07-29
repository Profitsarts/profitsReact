#!/usr/bin/env zsh

# ------------------------------------------------------------------
# Script to configure Ollama Pro authentication and cloud endpoint
# ------------------------------------------------------------------
# 1️⃣ Replace the placeholder below with the API key you generated
#     at https://ollama.com/account
setopt NO_BANG_HIST
OLLAMA_API_KEY='4d2f564f95b54152b8bc6d710443549c.oaeMU0RMIAlfgWa00CY_9jR2'  # ← reemplaza con tu clave API real (mantén las comillas simples)

# 2️⃣ Path to Ollama configuration file
CONFIG_FILE="${HOME}/.ollama/config.json"

# 3️⃣ Write the API key into the JSON config (creates the file if missing)
cat > "${CONFIG_FILE}" <<EOF
{
  "api_key": "${OLLAMA_API_KEY}"
}
EOF

# 4️⃣ Export the cloud host and API key for the current shell session
export OLLAMA_HOST="https://api.ollama.com"
export OLLAMA_API_KEY="${OLLAMA_API_KEY}"

# 5️⃣ Persist the environment variables in ~/.zshrc for future sessions
{
  echo 'export OLLAMA_HOST="https://api.ollama.com"'
  echo 'export OLLAMA_API_KEY="'"${OLLAMA_API_KEY}"'"'
} >> "${HOME}/.zshrc"

# 6️⃣ Reload the shell configuration so the variables take effect now
source "${HOME}/.zshrc"

# 7️⃣ Verify the configuration – list all models available to your Pro account
echo "✅ Ollama configuration written to ${CONFIG_FILE}"
echo "🔍 Ejecutando 'ollama list' para comprobar los modelos disponibles…"
ollama list