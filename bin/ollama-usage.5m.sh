#!/usr/bin/env bash
# <xbar.title>Ollama Pro Usage</xbar.title>
# <xbar.version>v1.0</xbar.version>
# <xbar.author>You</xbar.author>
# <xbar.desc>Show Ollama Cloud Pro consumption in the menu bar</xbar.desc>
# <xbar.dependencies>curl,jq</xbar.dependencies>
# <xbar.abouturl>https://ollama.com/account</xbar.abouturl>

# Install SwiftBar (brew install swiftbar) and drop this script in your SwiftBar plugin folder.
# Rename to: ollama-usage.5m.sh  (the "5m" means refresh every 5 minutes)

API_KEY="4d2f564f95b54152b8bc6d710443549c.oaeMU0RMIAlfgWa00CY_9jR2"
DATA=$(curl -s -H "Authorization: Bearer ${API_KEY}" "https://api.ollama.com/api/usage" 2>/dev/null)

if [ -z "$DATA" ]; then
    echo "🦙 --"
    echo "---"
    echo "❌ Could not reach Ollama API | color=red"
    exit 0
fi

SESSION_PCT=$(echo "$DATA" | jq -r '.limits.session.usage // 0' | awk '{printf "%.1f", $1 * 100}')
WEEKLY_PCT=$(echo "$DATA" | jq -r '.limits.weekly.usage // 0' | awk '{printf "%.1f", $1 * 100}')
COST=$(echo "$DATA" | jq -r '.activity.cost // "0.00"')

# Menu bar display: 🦙 S:6.7% W:2.3%
echo "🦙 S:${SESSION_PCT}% W:${WEEKLY_PCT}%"
echo "---"
echo "💵 Cost (4w): \$${COST} | color=green"
echo "---"
echo "📊 Session usage: ${SESSION_PCT}%"
echo "$DATA" | jq -r '.limits.session.models[]? | "  • \(.name): \(.request_count) requests"'
echo "📊 Weekly usage: ${WEEKLY_PCT}%"
echo "$DATA" | jq -r '.limits.weekly.models[]? | "  • \(.name): \(.request_count) requests"'
echo "---"
echo "🔗 Open Ollama Account | href=https://ollama.com/account"
echo "🔄 Refresh | refresh=true"