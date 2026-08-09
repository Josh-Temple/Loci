# Loci

**A walkable memory palace for the method of loci.**

Loci is an experimental, mobile-first web app for testing whether walking through a small virtual environment can make the method of loci practical for everyday learning.

## Current status

- Product role: Experiment
- Evidence level: E0 — hypothesis only
- Current goal: validate the core memory workflow before adding AI or platform features
- Primary test: can a user place roughly 10 memories along a fixed route, revisit the route, and recall them later?
- Implementation: MVP-03 adds isolated mobile touch movement and drag-to-look controls alongside the existing desktop controls; the memory workflow is intentionally not implemented yet.
- Deployment: https://loci-gamma.vercel.app/
- MVP-01 verification: Vercel successfully installed dependencies and completed the production build, and the deployed React Three Fiber scene was smoke-tested on an Android phone on 2026-08-09.

## MVP

The first MVP has one small palace with 10 clearly distinguishable loci. A user can:

1. Walk a fixed route on desktop and mobile.
2. Select a locus.
3. Attach a memory item and mnemonic scene to it.
4. Save the palace locally in the browser.
5. Study the route with memories visible.
6. Switch to Recall mode, revisit each locus, attempt recall, and reveal the answer.

The MVP stops there for evaluation.

## Proposed baseline stack

- React
- TypeScript
- Vite
- Three.js through React Three Fiber
- Browser-local persistence (`localStorage` initially)

The stack may be adjusted during implementation if Codex finds a simpler option that preserves the acceptance criteria.

## Explicitly out of scope for the MVP

Do not add these without a separate decision after the core workflow has been tested:

- Authentication
- Database or cloud sync
- Analytics platform
- Multiple palaces
- Procedural world generation
- Multiplayer or social features
- LLM API integration
- Text-to-3D generation
- Payments

## Documentation

- [`AGENTS.md`](./AGENTS.md) — implementation rules for Codex and other coding agents
- [`docs/PRODUCT_SPEC.md`](./docs/PRODUCT_SPEC.md) — product hypothesis, scope, and stop conditions
- [`docs/MVP_PLAN.md`](./docs/MVP_PLAN.md) — implementation stages and validation gate
- [`docs/DATA_MODEL.md`](./docs/DATA_MODEL.md) — initial domain model and persistence boundaries
- [`docs/AI_INTEGRATION.md`](./docs/AI_INTEGRATION.md) — post-MVP AI architecture, not current implementation scope

## Development workflow

Implementation work is tracked as GitHub Issues. Each issue should remain small, include observable acceptance criteria, and be completed without expanding into adjacent features.

Before writing code, read `AGENTS.md` and the relevant issue and documentation.

## Local development

```sh
npm install
npm run dev
```

Use `npm run build`, `npm run typecheck`, and `npm run lint` before submitting changes.

### Desktop controls

Click the 3D scene to capture the pointer, move with <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or the arrow keys, and move the mouse to look around. Press <kbd>Esc</kbd> to release the pointer.

### Mobile controls

Use the directional pad with your left thumb to walk forward, backward, left, or right. Drag the look pad with your right thumb to turn and look up or down.
