# CLAUDE.md — Claude Code routing & orchestration

## Role
Claude Code (Anthropic, this session). Specialist in implementation, refactoring, architecture, code review. Native backend = Anthropic models.

## Multi-agent context
This repo runs a 3-backend orchestration:

| Backend | Where | Cost | Strength |
|---|---|---|---|
| **Anthropic (me)** | Claude Code extension in Antigravity | Anthropic tokens | Architecture, nuanced refactor, review |
| **Gemini Pro** | Antigravity native agent window | Google Pro tokens | Web search, 1M-token codebase audits, planning |
| **GPT-OSS 120B** | Ollama Cloud (free tier w/ session/weekly limits) | Free | Prototypes 30–150 LOC, HTML/CSS/JS scaffolds |
| **Gemma 4** | Ollama local (`gemma4:e4b`, 9.6 GB) | Free | Data transforms, boilerplate < 30 LOC |

Sibling instruction file: `AGENTS.md` (for Gemini in Antigravity).

## Bridge file
`briefing_sync.md` (gitignored) = shared blackboard with Gemini.

**Mandatory rituals:**
1. **At session start:** read `briefing_sync.md`. If `## TASK FOR CLAUDE` has content → execute first, then clear that section.
2. **At session end:** update `## Last Action` block. If cross-window work needed → write under `## TASK FOR GEMINI`.

## Autonomous routing — fire delegations via Bash

Classify each non-trivial task BEFORE acting:

| Pattern | Backend | Command |
|---|---|---|
| JSON/CSV reshape, key rename, schema map | Gemma local | `bin/delegate.sh gemma "task"` |
| Repetitive boilerplate < 30 LOC, no logic | Gemma local | `bin/delegate.sh gemma "task"` |
| Prototype HTML/CSS/JS 30–150 LOC | GPT-OSS cloud | `bin/delegate.sh gpt "task"` |
| Scaffold component skeleton | GPT-OSS cloud | `bin/delegate.sh gpt "task"` |
| Architecture decision, multi-file refactor, review, ambiguous task | Native (me) | continue normally |

Always review delegated output before saving to project files — delegated models are cheap, not infallible.

## Cross-window — STOP, write to bridge (cannot fire autonomously)

| Pattern | Action |
|---|---|
| Codebase-wide audit (> 50 files) | Write `## TASK FOR GEMINI` in `briefing_sync.md`, stop, tell user to switch window |
| Web search / external docs lookup | Idem |
| Multi-source research synthesis | Idem |

## Usage logging — mandatory
Every non-trivial task produces ONE line in `.agent_usage.log`.

- `bin/delegate.sh` logs automatically.
- For NATIVE work, append manually at task end:
  ```bash
  printf '%s|%s|%ds|%s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "NATIVE-claude" 0 "short task desc" >> .agent_usage.log
  ```

Skip logging only for: trivial reads (single Read tool call), one-line edits, status checks.

## Analytics — verify pattern weekly
```bash
# Counts per model
awk -F'|' '{print $2}' .agent_usage.log | sort | uniq -c | sort -rn

# Total seconds per model
awk -F'|' '{gsub("s","",$3); a[$2]+=$3} END{for(k in a) printf "%-30s %ds\n", k, a[k]}' .agent_usage.log

# Last 7 days
awk -F'|' -v cut="$(date -u -v-7d +%Y-%m-%dT%H:%M:%SZ)" '$1>cut {print $2}' .agent_usage.log | sort | uniq -c
```

## Rules of engagement
- Routing patterns are guidance, not law. Ambiguous → default native (me).
- Hard cap: **max 6 delegations per session**. More = misorchestration, rethink.
- Always log NATIVE work too — otherwise stats skew toward delegations and reality is hidden.
- Never fire `ollama run` directly. Always via `bin/delegate.sh` (logging path).
- If `bin/delegate.sh` fails → fall back to native, don't retry silently. Surface the error.
