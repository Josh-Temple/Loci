import type { PointerEvent, RefObject } from 'react'
import { useState } from 'react'
import type { MobileDirection, MobileInputState } from './scene/mobileInput'

interface MobileControlOverlayProps {
  input: RefObject<MobileInputState>
}

const directionLabels: Record<MobileDirection, string> = {
  backward: 'Move backward',
  forward: 'Move forward',
  left: 'Move left',
  right: 'Move right',
}

export function MobileControlOverlay({ input }: MobileControlOverlayProps) {
  const [lookPosition, setLookPosition] = useState({ x: 0, y: 0 })

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
    updateLook(event)
  }

  const updateLook = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const radius = Math.min(bounds.width, bounds.height) / 2
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)
    const distance = Math.hypot(offsetX, offsetY)
    const scale = distance > radius ? radius / distance : 1
    const x = offsetX * scale / radius
    const y = offsetY * scale / radius

    input.current.lookX = x
    input.current.lookY = y
    setLookPosition({ x, y })
  }

  const stopLooking = () => {
    input.current.lookX = 0
    input.current.lookY = 0
    setLookPosition({ x: 0, y: 0 })
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
        aria-label="Hold joystick to look around"
        onPointerDown={startLooking}
        onPointerMove={updateLook}
        onPointerUp={stopLooking}
        onPointerCancel={stopLooking}
        onLostPointerCapture={stopLooking}
      >
        <span className="look-label">Hold to look</span>
        <span
          className="look-stick"
          aria-hidden="true"
          style={{ transform: `translate(${lookPosition.x * 2.25}rem, ${lookPosition.y * 2.25}rem)` }}
        />
      </div>
    </div>
  )
}
