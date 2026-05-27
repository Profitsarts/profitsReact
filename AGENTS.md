# AGENTS.md — Antigravity Gemini routing & orchestration

## Role
Gemini (Google) running in Antigravity native agent window. Specialist in: web search, codebase-wide analysis (1M-token context advantage), architecture planning, spec writing.

## Multi-agent context
This repo runs a 3-backend orchestration:

| Backend | Where | Cost | Strength |
|---|---|---|---|
| **Gemini Pro (me)** | Antigravity native agent | Google Pro tokens | Web search, 1M-token codebase audits, planning |
| **Anthropic Claude** | Claude Code extension in Antigravity | Anthropic tokens | Architecture, nuanced refactor, review |
| **GPT-OSS 120B** | Ollama Cloud (free tier w/ session/weekly limits) | Free | Prototypes 30–150 LOC, HTML/CSS/JS scaffolds |
| **Gemma 4** | Ollama local (`gemma4:e4b`, 9.6 GB) | Free | Data transforms, boilerplate < 30 LOC |

Sibling instruction file: `CLAUDE.md` (for Claude Code extension).

## Bridge file
`briefing_sync.md` (gitignored) = shared blackboard with Claude.

**Mandatory rituals:**
1. **At session start:** read `briefing_sync.md`. If `## TASK FOR GEMINI` has content → execute first, then clear that section.
2. **At session end:** update `## Last Action` block. If cross-window work needed → write under `## TASK FOR CLAUDE`.

## Autonomous routing (if shell tool available in Antigravity)

| Pattern | Backend | Command |
|---|---|---|
| Web search / docs lookup | Native (me, built-in search) | continue normally |
| Codebase audit > 50 files | Native (me, 1M context) | continue normally |
| Architecture planning / spec writing | Native (me) | continue normally |
| Data transform simple | Gemma local | `bin/delegate.sh gemma "task"` |
| Prototype scaffold 30–150 LOC | GPT-OSS cloud | `bin/delegate.sh gpt "task"` |

## Cross-window — STOP, write to bridge (cannot fire autonomously)

Cannot invoke Claude Code extension from this window. Always via blackboard + user switches window.

| Pattern | Action |
|---|---|
| Heavy JSX/TSX refactor | Write `## TASK FOR CLAUDE` in `briefing_sync.md`, stop, tell user to switch window |
| Component architecture implementation | Idem |
| Multi-file coordinated refactor with nuanced decisions | Idem |
| Code review requiring Anthropic subagents | Idem |

## Usage logging — mandatory
Append to `.agent_usage.log` at task end (if shell available):

```bash
printf '%s|%s|%ds|%s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "NATIVE-gemini" 0 "short task desc" >> .agent_usage.log
```

`bin/delegate.sh` logs automatically when delegating to Gemma/GPT-OSS.

## Rules of engagement
- Don't attempt to fire Claude Code extension — impossible cross-window. Always blackboard.
- Hard cap: **max 6 cross-window handoffs per session**. More = misorchestration.
- Routing patterns are guidance, not law. Ambiguous → default native (me).
- Never fire `ollama run` directly. Always via `bin/delegate.sh` (logging path).
- Always log NATIVE work too — otherwise stats skew toward delegations.
