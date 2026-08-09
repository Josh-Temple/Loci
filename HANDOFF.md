# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.
- A Vercel deployment is available at https://loci-gamma.vercel.app/.
- On 2026-08-09, Vercel successfully installed dependencies and completed the production build, resolving the earlier Codex Cloud npm-registry blocker as an environment-specific problem rather than a repository dependency failure.
- The deployed 3D scene was smoke-tested on an Android phone and rendered successfully at a phone-sized viewport.
- MVP-02 adds desktop first-person controls: click-to-lock mouse look, WASD/arrow-key walking, Escape to release the pointer, fixed eye height, and scene-edge movement bounds.
- MVP-03 adds mobile-only, thumb-sized directional buttons and a separate drag-to-look surface while retaining the desktop control component unchanged.
- MVP-03 was verified on a real Android device on 2026-08-09. Forward/back/left/right and diagonal/held movement, horizontal/vertical look, simultaneous movement plus look, input release behavior, and unobtrusive mobile control layout were all confirmed usable on the deployed app.
- MVP-04 replaces the placeholder cube with one compact garden route of 10 stable, named loci. Each locus uses a different primitive-built silhouette and color, and a continuous light path communicates traversal order.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- Desktop controls remain isolated and structurally intact in `src/scene/DesktopPlayerControls.tsx`; mobile camera movement lives in `src/scene/MobilePlayerControls.tsx` and its touch UI lives in `src/MobileControlOverlay.tsx`.
- Stable locus definitions are world-owned in `src/scene/world.ts`; the application intentionally has no locus selection, memory content, placements, persistence, study/recall modes, or AI behavior yet.
- AI integration, generated 3D assets, authentication, databases, cloud sync, and multiple palaces remain out of scope for the MVP unless separately approved.

## Next session

Issue #4 implementation is complete. Do not begin the next issue automatically; select the next target from the active GitHub issue and read its acceptance criteria first.

Issue #2 remains open only because real desktop-browser verification of Pointer Lock, mouse look, and keyboard movement is still pending. The Cloud Browser's lack of WebGL and Pointer Lock support is a verification-environment limitation, not a confirmed application defect. Do not block mobile-first MVP progress solely on that unavailable cloud-browser verification; preserve the existing desktop controls and verify them on a real PC when available.

Before subsequent work, visually smoke-test the complete route in a WebGL-capable desktop browser and on a phone. This environment had no installed browser, and downloading Playwright was blocked by npm registry HTTP 403, so screenshots and interactive traversal could not be completed here.

## Verification note

For MVP-03, `npm run typecheck`, `npm run lint`, and `npm run build` completed successfully during implementation. The latest Vercel deployment also succeeded. Android real-device testing then confirmed the mobile controls described above, so Issue #3 is complete.

For MVP-04, `npm run typecheck`, `npm run lint`, `npm run build`, and a focused source-data smoke check completed successfully. The smoke check confirmed 10 unique loci with sequential order values and distinct kinds. Desktop and mobile screenshots and interactive route traversal remain pending because no WebGL browser was available in the implementation environment.

For Issue #2, dependency installation and configured checks were blocked in the original Codex implementation environment by an npm-registry HTTP 403, and Cloud Browser verification later could not exercise WebGL or Pointer Lock. A real PC browser check is still required for Pointer Lock, mouse look, WASD/arrow movement, Escape release, and desktop regression verification.
