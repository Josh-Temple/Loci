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
  visualCue?: VisualCue
}
```

`visualCue` is optional during the earliest MVP. Text alone must be enough to test the workflow. A memory item remains domain content; it must not contain Three.js or React Three Fiber objects.

## VisualCue and Asset (future boundary)

Visual presentation is separate from both memory content and the resource used to render it. A cue describes presentation, while an asset identifies an interchangeable primitive, library model, or future generated model.

```ts
interface VisualCue {
  assetId?: string
  scale?: number
  rotation?: [number, number, number]
  offset?: [number, number, number]
  animation?: string
}

interface Asset {
  id: string
  source: 'primitive' | 'library' | 'generated'
  modelUrl?: string
}
```

The intended rendering flow is `MemoryItem -> VisualCue -> Asset -> 3D scene`. Scene objects are projections of structured application data, never the source of truth. This boundary lets primitive geometry, a curated asset library, and possible generated assets be resolved by the renderer without changing memory or placement records. These types are future-facing documentation, not an MVP implementation requirement.

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
  visualCue?: VisualCue
}

interface MemoryPlan {
  title: string
  items: MemoryPlanItem[]
}
```

This is a future-facing boundary only. It is not a requirement to add an AI API in the MVP.
