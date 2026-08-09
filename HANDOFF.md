# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.
- A Vercel deployment is available at https://loci-gamma.vercel.app/.
- On 2026-08-09, Vercel successfully installed dependencies and completed the production build, resolving the earlier Codex Cloud npm-registry blocker as an environment-specific problem rather than a repository dependency failure.
- The deployed 3D scene was smoke-tested on an Android phone and rendered successfully at a phone-sized viewport.
- MVP-02 adds desktop first-person controls: click-to-lock mouse look, WASD/arrow-key walking, Escape to release the pointer, fixed eye height, and scene-edge movement bounds.
- MVP-03 implements mobile-only, thumb-sized directional buttons and a separate drag-to-look surface while retaining the desktop control component unchanged.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- Desktop controls remain isolated and structurally intact in `src/scene/DesktopPlayerControls.tsx`; mobile camera movement lives in `src/scene/MobilePlayerControls.tsx` and its touch UI lives in `src/MobileControlOverlay.tsx`.
- The application intentionally has no loci, persistence, study/recall modes, or AI behavior yet.
- AI integration, generated 3D assets, authentication, databases, cloud sync, and multiple palaces remain out of scope for the MVP unless separately approved.

## Next session

Issue #2 is implemented and deployed but remains open pending real desktop-browser verification of Pointer Lock, mouse look, and keyboard movement. The Cloud Browser's lack of WebGL and Pointer Lock support is a verification-environment limitation, not a confirmed application defect.

Issue #3 is implemented and prepared for Vercel deployment and Android real-device testing. On Android, verify all four movement directions, held and diagonal movement, simultaneous left-thumb movement and right-thumb looking, horizontal and vertical look direction/sensitivity, release/cancel behavior (including sliding a thumb off a control), landscape and portrait layout, safe-area spacing, and that the controls leave most of the scene visible.

Before changing code:

1. Read `AGENTS.md`.
2. Read the next active issue.
3. Re-read the relevant product documentation.
4. Stop after Issue #3; do not begin Issue #4 until Issue #3's Android behaviors have been verified and the next issue is explicitly requested.

## Verification note

The earlier Codex Cloud verification attempts failed because the environment proxy returned HTTP 403 for `registry.npmjs.org`. Vercel subsequently installed the dependency set and completed the configured production build successfully. The Android deployment smoke test confirmed that the React Three Fiber scene renders on the deployed app.

`npm run lint` was not independently confirmed during the Vercel deployment evidence shared on 2026-08-09. Future implementation work should continue to run the repository's configured checks when the execution environment permits them.

For Issue #2, dependency installation and the configured checks could not run in the implementation environment because the npm registry returned HTTP 403. Pointer lock and keyboard movement therefore still need a desktop-browser smoke test after dependencies can be installed or the change is deployed. The control hint is intentionally hidden below 600px because mobile controls remain a separate issue.

For Issue #3, the available local dependencies allowed `npm run typecheck`, `npm run lint`, and `npm run build` to complete. This environment has no browser binary for an interactive WebGL/touch smoke test, so the Android behaviors listed above remain pending and must not be treated as verified.
