# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.
- A Vercel deployment is available at https://loci-gamma.vercel.app/.
- On 2026-08-09, Vercel successfully installed dependencies and completed the production build, resolving the earlier Codex Cloud npm-registry blocker as an environment-specific problem rather than a repository dependency failure.
- The deployed 3D scene was smoke-tested on an Android phone and rendered successfully at a phone-sized viewport.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- The application intentionally has no movement, controls, loci, persistence, study/recall modes, or AI behavior yet.
- AI integration, generated 3D assets, authentication, databases, cloud sync, and multiple palaces remain out of scope for the MVP unless separately approved.

## Next session

The next implementation target is GitHub Issue #2: desktop player movement and camera controls.

Before changing code:

1. Read `AGENTS.md`.
2. Read the active Issue #2.
3. Re-read the relevant product documentation.
4. Stay within Issue #2 scope and do not begin mobile controls or later work early.

## Verification note

The earlier Codex Cloud verification attempts failed because the environment proxy returned HTTP 403 for `registry.npmjs.org`. Vercel subsequently installed the dependency set and completed the configured production build successfully. The Android deployment smoke test confirmed that the React Three Fiber scene renders on the deployed app.

`npm run lint` was not independently confirmed during the Vercel deployment evidence shared on 2026-08-09. Future implementation work should continue to run the repository's configured checks when the execution environment permits them.
