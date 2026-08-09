# Loci Initial Data Model

This model is intentionally small. It defines boundaries rather than a final implementation.

## Locus

Represents a stable place in the palace.

Suggested fields:

```ts
interface Locus {
  id: string
  order: number
  name: string
  position: [number, number, number]
  interactionRadius?: number
}
```

The world owns loci. Memory content does not.

## MemoryItem

Represents something the user wants to remember.

```ts
interface MemoryItem {
  id: string
  concept: string
  mnemonic: string
  objectId?: string
}
```

`objectId` is optional during the earliest MVP. Text alone must be enough to test the workflow.

## Placement

Associates a memory with a locus.

```ts
interface Placement {
  locusId: string
  memoryItemId: string
}
```

Keep this relation separate so that future reordering or AI suggestions do not require changing the world definition.

## MemorySet

Represents one learning session/topic.

```ts
interface MemorySet {
  id: string
  title: string
  items: MemoryItem[]
  placements: Placement[]
  createdAt: string
  updatedAt: string
}
```

The MVP may support only one active set in the UI even if the storage shape can represent more than one.

## RecallAttempt

Optional for Stage 3.

```ts
type RecallRating = 'remembered' | 'almost' | 'forgot'

interface RecallAttempt {
  memorySetId: string
  locusId: string
  rating: RecallRating
  attemptedAt: string
}
```

Do not turn this into a full spaced-repetition scheduler during the MVP.

## Persistence

Initial persistence should be browser-local. `localStorage` is acceptable unless implementation constraints make another browser-local option clearly simpler or safer.

Persistence code should be isolated behind a small boundary so it can be replaced later without coupling storage concerns to 3D scene components.

## Future MemoryPlan boundary

Post-MVP AI or import features should produce structured data rather than directly mutate scene objects.

Example shape:

```ts
interface MemoryPlanItem {
  concept: string
  mnemonic: string
  suggestedLocusId?: string
  objectId?: string
}

interface MemoryPlan {
  title: string
  items: MemoryPlanItem[]
}
```

This is a future-facing boundary only. It is not a requirement to add an AI API in the MVP.