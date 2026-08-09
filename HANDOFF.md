# Handoff

## Completed

- MVP-01 scaffolds React, TypeScript, Vite, and a minimal React Three Fiber scene.
- The future `MemoryItem -> VisualCue -> Asset -> 3D scene` boundary is documented without implementing AI or asset systems.
- A Vercel deployment is available at https://loci-gamma.vercel.app/.
- On 2026-08-09, Vercel successfully installed dependencies and completed the production build, resolving the earlier Codex Cloud npm-registry blocker as an environment-specific problem rather than a repository dependency failure.
- The deployed 3D scene was smoke-tested on an Android phone and rendered successfully at a phone-sized viewport.
- MVP-02 adds desktop first-person controls: click-to-lock mouse look, WASD/arrow-key walking, Escape to release the pointer, fixed eye height, and scene-edge movement bounds.
- MVP-03 adds mobile touch movement and look controls while retaining the desktop control component unchanged.
- MVP-03 was verified on a real Android device on 2026-08-09. Movement, horizontal/vertical look, simultaneous movement plus look, input release behavior, and unobtrusive mobile control layout were confirmed usable on the deployed app.
- MVP-04 replaces the placeholder cube with one compact garden route of 10 stable, named loci.
- MVP-04 was verified on a real Android device: the complete route could be traversed successfully, the loci were distinguishable enough to follow without a map, and mobile performance was usable. Issue #4 is complete.
- Issue #17 (MVP-04R) widened the garden route, separated walking-line coordinates from landmark coordinates, moved major landmarks beside the route, and experimentally changed mobile left/right buttons from strafing to held yaw steering.
- Real Android use confirmed that the wider route and landmark-beside-path layout are a substantial improvement. Issue #17 is complete as an intermediate refinement; its held-yaw left/right interaction is intentionally superseded by Issue #19.
- Issue #19 (MVP-04S) implements four-way held translation on the left pad and a held, speed-sensitive look joystick with a center dead zone on the right pad. Movement remains normalized diagonally, and release/cancel/lost capture immediately clears look input.
- Issue #19 was verified on a real Android device on 2026-08-10. The final two-thumb mobile control model was reported easy to use and behaving as intended. Issue #19 is complete.

## Current boundaries

- `src/scene` contains rendering concerns only; no memory or placement state lives in the scene.
- Desktop controls remain isolated and structurally intact in `src/scene/DesktopPlayerControls.tsx`; mobile camera movement lives in `src/scene/MobilePlayerControls.tsx` and its touch UI lives in `src/MobileControlOverlay.tsx`.
- Stable locus definitions and the separate `ROUTE_POINTS` walking line are world-owned in `src/scene/world.ts`.
- The application intentionally has no memory content, placements, persistence, study/recall modes, or AI behavior yet.
- AI integration, generated 3D assets, authentication, databases, cloud sync, and multiple palaces remain out of scope for the MVP unless separately approved.

## Next session

The next implementation target is GitHub Issue #5: `MVP-05 Add locus proximity and selection interaction`.

Before changing code:

1. Read `AGENTS.md`, Issue #5, and `docs/DATA_MODEL.md`.
2. Detect the nearest eligible locus using the existing stable `LOCI` definitions and their `interactionRadius` values, or an equally simple mechanism consistent with the issue.
3. Show clear but quiet proximity feedback with the locus name and one intentional selection affordance.
4. Support the interaction on mobile and desktop without replacing the existing movement/control systems.
5. When multiple loci could be nearby, select only the intended nearest eligible locus deterministically.
6. Remove proximity feedback when leaving the interaction area.
7. Keep selection state separate from memory content and future placement/persistence data.
8. Do not add memory editing, persistence, Study/Recall, minimaps, AI, or Issue #6+ work.
9. Run `npm run typecheck`, `npm run lint`, and `npm run build` when available, then deploy and perform focused enter/select/leave smoke tests.
10. Stop after Issue #5 and its verification. Do not begin Issue #6 automatically.

Issue #2 remains open only because real desktop-browser verification of Pointer Lock, mouse look, and keyboard movement is still pending. The Cloud Browser's lack of WebGL and Pointer Lock support is a verification-environment limitation, not a confirmed application defect. Do not block mobile-first MVP progress solely on that unavailable cloud-browser verification; preserve the existing desktop controls and verify them on a real PC when available.

## Verification note

For MVP-03, `npm run typecheck`, `npm run lint`, and `npm run build` completed successfully during implementation, and Android real-device testing confirmed the mobile controls.

For MVP-04, `npm run typecheck`, `npm run lint`, `npm run build`, and a focused source-data smoke check completed successfully. Android real-device traversal then confirmed that the route is usable and followable.

For Issue #17, `npm run typecheck`, `npm run lint`, and `npm run build` passed, and a focused source check confirmed that the same 10 unique locus IDs, names, order values, and kinds remained while route points were separated from landmark positions. Subsequent Android use found the route/readability change substantially better.

For Issue #19, `npm run typecheck`, `npm run lint`, `npm run build`, `git diff --check`, and a focused source smoke check passed in PR #20. The merged main commit deployed successfully on Vercel. Android real-device testing then confirmed the resulting four-way movement and held-look joystick interaction is easy to use and matches the intended control model, so Issue #19 is complete.

For Issue #2, dependency installation and configured checks were blocked in the original Codex implementation environment by an npm-registry HTTP 403, and Cloud Browser verification later could not exercise WebGL or Pointer Lock. A real PC browser check is still required for Pointer Lock, mouse look, WASD/arrow movement, Escape release, and desktop regression verification.
