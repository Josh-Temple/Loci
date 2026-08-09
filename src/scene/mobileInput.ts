export type MobileDirection = 'backward' | 'forward' | 'left' | 'right'

export interface MobileInputState {
  directions: Set<MobileDirection>
  lookX: number
  lookY: number
}

export function createMobileInputState(): MobileInputState {
  return { directions: new Set(), lookX: 0, lookY: 0 }
}
