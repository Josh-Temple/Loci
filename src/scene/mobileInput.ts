export type MobileDirection = 'backward' | 'forward' | 'left' | 'right'

export interface MobileInputState {
  directions: Set<MobileDirection>
  lookDeltaX: number
  lookDeltaY: number
}

export function createMobileInputState(): MobileInputState {
  return { directions: new Set(), lookDeltaX: 0, lookDeltaY: 0 }
}
