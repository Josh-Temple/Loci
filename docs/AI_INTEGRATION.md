# Loci AI Integration — Post-MVP

AI is not part of the first MVP. This document preserves the intended boundary so the core app does not become tightly coupled to one provider.

## Goal

If the walk/place/recall loop proves useful, test whether AI can reduce setup friction while preserving the user's active role in forming memories.

## Candidate AI tasks

- Turn a learning goal into a small list of memory items.
- Suggest vivid or unusual mnemonic scenes.
- Map concepts to an existing object library.
- Suggest locus assignments.
- Produce a structured plan for user review.
- Offer alternatives such as "make it stranger" or "change the locus".

## Provider-neutral boundary

A future adapter can follow a shape similar to:

```ts
interface MemoryAssistant {
  suggest(input: string, loci: Locus[]): Promise<MemoryPlan>
}
```

The rest of the application should consume `MemoryPlan`, not provider-specific response objects.

## First AI test

Before connecting any paid API, implement a mock/static `MemoryPlan` import. Confirm that a generated plan can be reviewed and placed into the palace cleanly.

## Human-in-the-loop principle

Do not assume full automation is best for memory. Preserve the ability to:

- accept a suggestion,
- edit the mnemonic,
- choose another locus,
- choose another object,
- reject the suggestion.

Future evaluation should compare:

1. user-created mnemonic,
2. AI suggestion accepted unchanged,
3. AI suggestion edited by the user.

## 3D generation

Text-to-3D is a later experiment, not a default dependency. Prefer a small reusable object library plus transforms such as scale, orientation, repetition, and motion. Add generated models only if real use shows that the existing library materially limits mnemonic quality.

## API cost and credentials

Do not place provider API keys in client-side code. Any future external API integration must define a safe credential model before implementation. Self-hosted or user-controlled infrastructure can be evaluated separately after the core product is validated.