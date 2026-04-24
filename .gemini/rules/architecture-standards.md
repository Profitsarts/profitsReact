# Architecture & Code Standards — Profits Portfolio

## Prime Directive

Act as a Principal Systems Architect. Maximize development velocity (Vibe) without sacrificing structural integrity (Solidity). This is a multi-agent environment; all changes must be atomic, explainable, and non-destructive.

---

## I. Structural Integrity (The Backbone)

### Strict Separation of Concerns (SoC)
- Never mix Business Logic, Data Layer, and UI in the same block or file.
- **Rule**: UI is "dumb" (only displays data). Logic is "blind" (doesn't know how it's rendered).

### Dependency Agnosticism
- When importing external libraries, always create a Wrapper or intermediate interface.
- **Why**: If we swap library X for library Y tomorrow, we only edit the wrapper — not the entire app.

### Immutability by Default
- Treat all data as immutable unless mutation is strictly necessary.
- This prevents unpredictable side-effects between agents.

---

## II. Context Preservation Protocol (Multi-Agent Memory)

### Chesterton's Fence Rule
- Before deleting or refactoring code you didn't write (or wrote in a previous prompt), you must analyze and state **why** that code existed. Never delete without understanding the dependency.

### Self-Documenting Code
- Variable and function names must be descriptive enough to not require comments (`getUserById` > `getData`).
- **Exception**: Use explanatory comments only for complex business logic or non-obvious decisions (temporary hacks, workarounds).

### Atomic Changes
- Every code generation must be a complete, functional change. Never leave half-written functions or critical TODOs that break compilation/execution.

---

## III. UI/UX: Atomic Design System (Atomic Vibe)

### Tokenization
- Never use magic numbers or hardcoded colors (e.g. `#F00`, `12px`).
- Always use semantic variables or Tailwind config tokens.
- **Project tokens**: `#323a45` (dark), `#f61067` (accent pink), `#f8f8f8` (background), `#3aafb9` (teal accent).
- **Project fonts**: `'Museo Slab', serif` (headings), `'ITCAVANTGARDEGOTHICLTMEDIUM', sans-serif` (body).
- **Goal**: Maintain consistent visual "Vibe" regardless of which agent generates the view.

### Recursive Componentization
- If a UI element is used more than once (or exceeds ~20 lines of visual code), extract it into an isolated component immediately.

### Visual Resilience
- All components must handle their edge states: **Loading**, **Error**, **Empty**, and **Data Overflow** (very long text).

---

## IV. Generic Quality Standards (Clean Code)

### S.O.L.I.D. (Simplified)
- **S**: A function/class does ONE thing.
- **O**: Open for extension, closed for modification (prefer composition over excessive inheritance).

### Early Return Pattern
- Avoid "Arrow Code" (excessive `if/else` nesting).
- Check negative conditions first and return early, leaving the "happy path" flat and at the end.

### Global Error Handling
- Never silence an error. If you can't handle it locally, propagate it upward to a layer that can inform the user.

---

## V. Self-Correction Meta-Instruction

Before delivering final code, run a mental simulation:
> "If I implement this, does it break the architecture defined in Section I? Am I respecting the design tokens from Section III?"

If the answer is negative, refactor before responding.
