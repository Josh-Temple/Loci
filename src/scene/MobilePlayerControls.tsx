import { useFrame, useThree } from '@react-three/fiber'
import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { MathUtils, Vector3 } from 'three'
import type { MobileInputState } from './mobileInput'

const WALK_SPEED = 3
const PLAYER_HEIGHT = 1.65
const WORLD_LIMIT = 6.5
const LOOK_SENSITIVITY = 0.004

interface MobilePlayerControlsProps {
  input: RefObject<MobileInputState>
}

export function MobilePlayerControls({ input }: MobilePlayerControlsProps) {
  const { camera } = useThree()
  const isTouchDevice = useRef(false)
  const yaw = useRef(camera.rotation.y)
  const pitch = useRef(camera.rotation.x)

  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: none) and (pointer: coarse)')
    const updateInputMode = () => {
      isTouchDevice.current = touchQuery.matches
    }

    updateInputMode()
    touchQuery.addEventListener('change', updateInputMode)
    return () => touchQuery.removeEventListener('change', updateInputMode)
  }, [])

  useFrame((_, delta) => {
    if (!isTouchDevice.current) return

    const controls = input.current

    yaw.current -= controls.lookDeltaX * LOOK_SENSITIVITY
    pitch.current = MathUtils.clamp(
      pitch.current - controls.lookDeltaY * LOOK_SENSITIVITY,
      -Math.PI / 2 + 0.05,
      Math.PI / 2 - 0.05,
    )
    controls.lookDeltaX = 0
    controls.lookDeltaY = 0

    const forward = Number(controls.directions.has('forward')) -
      Number(controls.directions.has('backward'))
    const right = Number(controls.directions.has('right')) -
      Number(controls.directions.has('left'))

    if (forward === 0 && right === 0 && yaw.current === camera.rotation.y && pitch.current === camera.rotation.x) {
      return
    }

    camera.rotation.set(pitch.current, yaw.current, 0, 'YXZ')

    if (forward === 0 && right === 0) return

    const movement = new Vector3(right, 0, -forward)
      .normalize()
      .applyAxisAngle(new Vector3(0, 1, 0), yaw.current)
      .multiplyScalar(WALK_SPEED * Math.min(delta, 0.1))

    camera.position.add(movement)
    camera.position.x = MathUtils.clamp(camera.position.x, -WORLD_LIMIT, WORLD_LIMIT)
    camera.position.y = PLAYER_HEIGHT
    camera.position.z = MathUtils.clamp(camera.position.z, -WORLD_LIMIT, WORLD_LIMIT)
  })

  return null
}
