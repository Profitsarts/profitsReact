#!/bin/bash
# delegate.sh — wrapper around `ollama run` with automatic usage logging.
#
# Usage:
#   bin/delegate.sh <alias|model_id> "task description"
#
# Aliases:
#   gemma  -> gemma4:e4b           (local, ~9.6 GB, free)
#   gpt    -> gpt-oss:120b-cloud   (Ollama cloud, free tier with session/weekly limits)
#
# Every invocation appends one line to .agent_usage.log at repo root:
#   ISO_TIMESTAMP|MODEL|DURATION|TASK_DESCRIPTION
#
set -e

if [ $# -lt 2 ]; then
  echo "Usage: $0 <alias|model_id> \"task description\"" >&2
  echo "Aliases: gemma -> gemma4:e4b | gpt -> gpt-oss:120b-cloud" >&2
  exit 1
fi

ALIAS=$1
shift
TASK="$*"

case "$ALIAS" in
  gemma) MODEL="gemma4:e4b" ;;
  gpt)   MODEL="gpt-oss:120b-cloud" ;;
  *)     MODEL="$ALIAS" ;;
esac

# Locate repo root (git first, fall back to PWD)
REPO_ROOT="${REPO_ROOT:-$(git rev-parse --show-toplevel 2>/dev/null || echo "$PWD")}"
LOG_FILE="$REPO_ROOT/.agent_usage.log"

START=$(date +%s)
OUTPUT=$(ollama run "$MODEL" "$TASK")
EXIT_CODE=$?
END=$(date +%s)
DURATION=$((END - START))

# Strip pipes from task description to keep log parseable, cap length
SAFE_TASK=$(printf '%s' "$TASK" | tr '|' '/' | tr '\n' ' ' | cut -c1-120)

printf '%s|%s|%ds|%s\n' \
  "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  "$MODEL" \
  "$DURATION" \
  "$SAFE_TASK" >> "$LOG_FILE"

printf '%s\n' "$OUTPUT"
exit $EXIT_CODE
