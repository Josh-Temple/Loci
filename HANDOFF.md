# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- The application intentionally has no movement, controls, loci, persistence, study/recall modes, or AI behavior.

## Next session

Continue only from the next explicitly assigned GitHub issue. Re-read the product documents and active issue before making changes; do not infer that Issue #2 should begin automatically.

## Verification

Run `npm install`, `npm run build`, `npm run typecheck`, and `npm run lint`. Browser smoke testing should cover desktop and phone-sized viewports.
