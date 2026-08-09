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

// World-owned, stable route data. Memory items and their placements belong elsewhere.
export const LOCI: readonly WorldLocus[] = [
  { id: 'blue-arch', order: 1, name: 'Blue Arch', position: [0, 0, 5], kind: 'arch', color: '#2563eb', interactionRadius: 1.5 },
  { id: 'red-bench', order: 2, name: 'Red Bench', position: [-3.8, 0, 3.8], kind: 'bench', color: '#dc2626', interactionRadius: 1.5 },
  { id: 'golden-well', order: 3, name: 'Golden Well', position: [-4.2, 0, 0.8], kind: 'well', color: '#d97706', interactionRadius: 1.5 },
  { id: 'apple-tree', order: 4, name: 'Apple Tree', position: [-3.8, 0, -2.6], kind: 'tree', color: '#15803d', interactionRadius: 1.7 },
  { id: 'purple-obelisk', order: 5, name: 'Purple Obelisk', position: [-1.3, 0, -4.6], kind: 'obelisk', color: '#7e22ce', interactionRadius: 1.5 },
  { id: 'moon-pond', order: 6, name: 'Moon Pond', position: [1.8, 0, -4.4], kind: 'pond', color: '#38bdf8', interactionRadius: 1.8 },
  { id: 'stone-lion', order: 7, name: 'Stone Lion', position: [4.2, 0, -2.2], kind: 'statue', color: '#e2e8f0', interactionRadius: 1.5 },
  { id: 'green-lantern', order: 8, name: 'Green Lantern', position: [4.2, 0, 0.9], kind: 'lantern', color: '#22c55e', interactionRadius: 1.4 },
  { id: 'orange-windmill', order: 9, name: 'Orange Windmill', position: [3.6, 0, 3.8], kind: 'windmill', color: '#f97316', interactionRadius: 1.7 },
  { id: 'star-fountain', order: 10, name: 'Star Fountain', position: [0.8, 0, 2.3], kind: 'fountain', color: '#facc15', interactionRadius: 1.7 },
]

