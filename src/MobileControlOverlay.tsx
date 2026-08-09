import type { PointerEvent, RefObject } from 'react'
import type { MobileDirection, MobileInputState } from './scene/mobileInput'

interface MobileControlOverlayProps {
  input: RefObject<MobileInputState>
}

const directionLabels: Record<MobileDirection, string> = {
  backward: 'Move backward',
  forward: 'Move forward',
  left: 'Turn left',
  right: 'Turn right',
}

export function MobileControlOverlay({ input }: MobileControlOverlayProps) {
  const startMoving = (direction: MobileDirection) => (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    input.current.directions.add(direction)
  }

  const stopMoving = (direction: MobileDirection) => () => {
    input.current.directions.delete(direction)
  }

  const startLooking = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const lookAround = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    input.current.lookDeltaX += event.movementX
    input.current.lookDeltaY += event.movementY
  }

  return (
    <div className="mobile-controls" aria-label="Touch controls">
      <div className="movement-pad" aria-label="Movement controls">
        {(['forward', 'left', 'backward', 'right'] as const).map((direction) => (
          <button
            className={`move-button move-${direction}`}
            key={direction}
            type="button"
            aria-label={directionLabels[direction]}
            onPointerDown={startMoving(direction)}
            onPointerUp={stopMoving(direction)}
            onPointerCancel={stopMoving(direction)}
            onLostPointerCapture={stopMoving(direction)}
          >
            <span aria-hidden="true">
              {direction === 'forward' ? '▲' : direction === 'backward' ? '▼' : direction === 'left' ? '◀' : '▶'}
            </span>
          </button>
        ))}
      </div>
      <div
        className="look-pad"
        role="application"
        aria-label="Drag to look around"
        onPointerDown={startLooking}
        onPointerMove={lookAround}
      >
        <span>Drag to look</span>
      </div>
    </div>
  )
}
