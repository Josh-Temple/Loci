# Loci Product Spec

## Product statement

Loci is a small, mobile-first web experiment that turns the method of loci into a walkable browser experience.

## Core problem

The method of loci can be effective, but constructing and revisiting a stable memory palace requires effort. Loci tests whether a small virtual environment can lower that friction without removing the user's active role in forming memorable associations.

## Current hypothesis

A user can benefit from a single fixed virtual route with roughly 10 distinct loci if they can:

- walk the route,
- attach memories to places,
- revisit the same places in a stable order,
- attempt recall before revealing the answer.

## Current product role

- Role: Experiment
- Evidence: E0
- Audience for MVP: creator/self-test first

## Success signal for MVP

The MVP is worth continuing if the core loop is usable enough that the same user voluntarily creates and revisits more than one memory set and reports that spatial cues are useful during recall.

The first implementation should also make it possible to observe basic recall results manually without building an analytics system.

## Stop condition

Pause or stop if, after several real self-tests with approximately 10-item memory sets, the walk/place/recall loop feels more cumbersome than useful or spatial cues do not meaningfully assist recall.

## MVP scope

One fixed palace, roughly 10 loci, one route, local persistence, study mode, recall mode, mobile and desktop interaction.

## Design principles

- Distinctive places matter more than graphical fidelity.
- A clear route matters more than a large explorable world.
- The user should not get lost.
- Memory association remains user-visible and editable.
- The interface should stay quiet while the world and mnemonic scenes carry the memorable content.

## Not MVP scope

- AI generation
- Generated 3D models
- User accounts
- Sync
- Sharing
- Multiple worlds
- Gamification systems
- General spaced-repetition platform
- Social learning

## Future hypothesis: generative AI

Only after the core loop passes the MVP gate, test whether generative AI improves setup speed without weakening recall. Possible AI roles include:

- decompose a learning goal into memory items,
- propose unusual mnemonic scenes,
- map concepts to an existing object library,
- suggest loci assignments,
- produce a structured `MemoryPlan` that the user can review and edit.

A fully automatic flow should not be assumed to be superior. Compare AI-generated associations, user-created associations, and AI suggestions edited by the user.