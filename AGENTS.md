# AGENTS.md

## Mission

Build the smallest usable browser-based method-of-loci experience that can be tested on a phone.

The product hypothesis matters more than feature count or visual spectacle.

## Priorities

1. Usable memory workflow
2. Mobile usability
3. Clear and distinguishable landmarks
4. Fast loading and stable interaction
5. Visual polish

## Working rules

- Read the active GitHub Issue and relevant docs before changing code.
- Stay within the issue scope.
- Prefer the simplest implementation that satisfies the acceptance criteria.
- Keep 3D-world data, memory data, and placement data separable.
- Preserve local-first operation during the MVP.
- Avoid introducing infrastructure until there is evidence that the MVP needs it.
- Do not invent adjacent features because they seem useful.
- If a requested change conflicts with `docs/PRODUCT_SPEC.md`, stop and surface the conflict in the PR or task result instead of silently broadening scope.

## Do not add without explicit approval

- Authentication
- Database
- Cloud sync
- Analytics platform
- Multiplayer or social features
- Multiple palaces
- Procedural generation
- LLM API integration
- Text-to-3D generation
- Payments

## Verification

For each implementation issue:

1. Run the repository's configured build/typecheck/lint commands that are relevant and available.
2. Perform a focused smoke test of the changed behavior.
3. For interaction or layout work, check both a desktop viewport and a mobile viewport when possible.
4. Never claim a verification step was completed if it could not be run; state what remains to be checked manually.

## Completion discipline

An issue is complete only when its acceptance criteria are observable. Do not continue automatically into the next issue.