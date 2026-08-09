# Loci MVP Plan

## Objective

Reach a testable, phone-usable memory-palace loop with one fixed world and about 10 loci, then stop for real use before adding AI.

## Stage 1 — Walkable palace

Deliver a lightweight 3D scene with a clear route and 10 distinguishable loci.

Minimum outcomes:
- desktop movement and camera control,
- mobile movement and camera control,
- stable route from start to finish,
- locus proximity/selection feedback,
- no requirement for high-fidelity art.

## Stage 2 — Place and persist memories

Add a minimal memory workflow:
- create/edit a memory item,
- associate it with a locus,
- store concept and mnemonic scene text,
- persist state in the browser,
- restore state after reload.

## Stage 3 — Study and recall

Add two explicit modes:

### Study
Memory content is visible at its locus.

### Recall
Memory content is hidden until the user attempts recall and chooses Reveal. A lightweight self-rating such as `remembered / almost / forgot` may be stored locally.

## MVP validation gate

After Stage 3, stop feature work and conduct real self-tests with approximately 10 items.

Suggested test sets:
- history facts or sequence,
- language vocabulary,
- arbitrary unrelated items.

Observe:
- setup friction,
- ability to navigate without getting lost,
- immediate recall,
- next-day recall,
- whether the same loci provide useful cues on revisits,
- whether the user wants to create another set.

Do not build analytics infrastructure for this. Manual notes are enough at E0.

## Post-gate work

Only if the core workflow is worth continuing:

1. Add a provider-neutral `MemoryAssistant` boundary.
2. Support importing a structured `MemoryPlan` using mock/static data first.
3. Test AI-generated mnemonic suggestions.
4. Decide separately whether an external LLM API is warranted.
5. Consider text-to-3D only if the fixed object library proves materially limiting.

## Stop rule

Do not continue from the MVP directly into platform work. The next phase requires an explicit decision based on actual use.