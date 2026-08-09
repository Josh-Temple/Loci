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

Verification was retried on 2026-08-09 from commit `d43e142`:

- `npm install` remains blocked because the environment's proxy returns HTTP 403 for `registry.npmjs.org`.
- Dependencies were therefore unavailable, so build, typecheck, lint, and browser smoke testing could not be run.
- Issue #1 must remain open until those checks cover both desktop and phone-sized viewports and confirm the React Three Fiber canvas renders and resizes without runtime errors.

In the next verification session, run `npm install`, `npm run build`, `npm run typecheck`, and `npm run lint`, then smoke-test the app at desktop and phone-sized viewports. Do not begin Issue #2 as part of that verification.
