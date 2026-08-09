# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.
- A Vercel deployment is available at https://loci-gamma.vercel.app/.
- On 2026-08-09, Vercel successfully installed dependencies and completed the production build, resolving the earlier Codex Cloud npm-registry blocker as an environment-specific problem rather than a repository dependency failure.
- The deployed 3D scene was smoke-tested on an Android phone and rendered successfully at a phone-sized viewport.
- MVP-02 adds desktop first-person controls: click-to-lock mouse look, WASD/arrow-key walking, Escape to release the pointer, fixed eye height, and scene-edge movement bounds.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- Desktop controls are isolated in `src/scene/DesktopPlayerControls.tsx`; mobile controls are not implemented.
- The application intentionally has no loci, persistence, study/recall modes, or AI behavior yet.
- AI integration, generated 3D assets, authentication, databases, cloud sync, and multiple palaces remain out of scope for the MVP unless separately approved.

## Next session

Issue #2 is implemented locally and should be reviewed and deployed before starting the next issue.

Before changing code:

1. Read `AGENTS.md`.
2. Read the next active issue.
3. Re-read the relevant product documentation.
4. Do not begin mobile controls or later work without an issue that explicitly requests it.

## Verification note

The earlier Codex Cloud verification attempts failed because the environment proxy returned HTTP 403 for `registry.npmjs.org`. Vercel subsequently installed the dependency set and completed the configured production build successfully. The Android deployment smoke test confirmed that the React Three Fiber scene renders on the deployed app.

`npm run lint` was not independently confirmed during the Vercel deployment evidence shared on 2026-08-09. Future implementation work should continue to run the repository's configured checks when the execution environment permits them.

For Issue #2, dependency installation and the configured checks could not run in the implementation environment because the npm registry returned HTTP 403. Pointer lock and keyboard movement therefore still need a desktop-browser smoke test after dependencies can be installed or the change is deployed. The control hint is intentionally hidden below 600px because mobile controls remain a separate issue.
