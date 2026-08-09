import { useFrame, useThree } from '@react-three/fiber'
import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'
import { MathUtils, Vector3 } from 'three'
import type { MobileInputState } from './mobileInput'

const WALK_SPEED = 3
const PLAYER_HEIGHT = 1.65
const WORLD_LIMIT = 10.5
const MAX_LOOK_SPEED = 1.8
const LOOK_DEAD_ZONE = 0.12

function applyDeadZone(value: number) {
  const magnitude = Math.abs(value)
  if (magnitude <= LOOK_DEAD_ZONE) return 0
  return Math.sign(value) * (magnitude - LOOK_DEAD_ZONE) / (1 - LOOK_DEAD_ZONE)
}

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

    const frameDelta = Math.min(delta, 0.1)
    const lookX = applyDeadZone(controls.lookX)
    const lookY = applyDeadZone(controls.lookY)

    yaw.current -= lookX * MAX_LOOK_SPEED * frameDelta
    pitch.current = MathUtils.clamp(
      pitch.current - lookY * MAX_LOOK_SPEED * frameDelta,
      -Math.PI / 2 + 0.05,
      Math.PI / 2 - 0.05,
    )

    const forward = Number(controls.directions.has('forward')) -
      Number(controls.directions.has('backward'))
    const right = Number(controls.directions.has('right')) -
      Number(controls.directions.has('left'))

    if (forward === 0 && right === 0 && lookX === 0 && lookY === 0 &&
      yaw.current === camera.rotation.y && pitch.current === camera.rotation.x) {
      return
    }

    camera.rotation.set(pitch.current, yaw.current, 0, 'YXZ')

    if (forward === 0 && right === 0) return

    const movement = new Vector3(right, 0, -forward)
      .normalize()
      .applyAxisAngle(new Vector3(0, 1, 0), yaw.current)
      .multiplyScalar(WALK_SPEED * frameDelta)

    camera.position.add(movement)
    camera.position.x = MathUtils.clamp(camera.position.x, -WORLD_LIMIT, WORLD_LIMIT)
    camera.position.y = PLAYER_HEIGHT
    camera.position.z = MathUtils.clamp(camera.position.z, -WORLD_LIMIT, WORLD_LIMIT)
  })

  return null
}
