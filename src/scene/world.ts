export type LocusKind =
  | 'arch'
  | 'bench'
  | 'fountain'
  | 'lantern'
  | 'obelisk'
  | 'pond'
  | 'statue'
  | 'tree'
  | 'well'
  | 'windmill'

export interface WorldLocus {
  id: string
  order: number
  name: string
  position: [number, number, number]
  kind: LocusKind
  color: string
  interactionRadius: number
}

// Walking-line coordinates stay separate from the landmark coordinates so the
// route remains unobstructed while every locus retains a stable world position.
export const ROUTE_POINTS: readonly [number, number, number][] = [
  [0, 0, 8],
  [-4, 0, 7],
  [-7, 0, 4],
  [-7, 0, 0],
  [-6, 0, -4],
  [-3, 0, -7],
  [1, 0, -7],
  [5, 0, -5],
  [7, 0, -1],
  [6, 0, 4],
  [3, 0, 7],
]

// World-owned, stable route data. Memory items and their placements belong elsewhere.
export const LOCI: readonly WorldLocus[] = [
  { id: 'blue-arch', order: 1, name: 'Blue Arch', position: [-2, 0, 8.7], kind: 'arch', color: '#2563eb', interactionRadius: 2.5 },
  { id: 'red-bench', order: 2, name: 'Red Bench', position: [-4.5, 0, 8.7], kind: 'bench', color: '#dc2626', interactionRadius: 2.2 },
  { id: 'golden-well', order: 3, name: 'Golden Well', position: [-8.7, 0, 4], kind: 'well', color: '#d97706', interactionRadius: 2.2 },
  { id: 'apple-tree', order: 4, name: 'Apple Tree', position: [-8.7, 0, 0], kind: 'tree', color: '#15803d', interactionRadius: 2.4 },
  { id: 'purple-obelisk', order: 5, name: 'Purple Obelisk', position: [-7.7, 0, -4.5], kind: 'obelisk', color: '#7e22ce', interactionRadius: 2.2 },
  { id: 'moon-pond', order: 6, name: 'Moon Pond', position: [-3, 0, -8.7], kind: 'pond', color: '#38bdf8', interactionRadius: 2.5 },
  { id: 'stone-lion', order: 7, name: 'Stone Lion', position: [1, 0, -8.7], kind: 'statue', color: '#e2e8f0', interactionRadius: 2.2 },
  { id: 'green-lantern', order: 8, name: 'Green Lantern', position: [6.5, 0, -6.2], kind: 'lantern', color: '#22c55e', interactionRadius: 2.2 },
  { id: 'orange-windmill', order: 9, name: 'Orange Windmill', position: [8.7, 0, -1], kind: 'windmill', color: '#f97316', interactionRadius: 2.4 },
  { id: 'star-fountain', order: 10, name: 'Star Fountain', position: [7.7, 0, 4.5], kind: 'fountain', color: '#facc15', interactionRadius: 2.4 },
]
