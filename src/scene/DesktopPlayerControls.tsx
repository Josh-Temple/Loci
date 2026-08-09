import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { MathUtils, Vector3 } from 'three'

const WALK_SPEED = 3
const PLAYER_HEIGHT = 1.65
const WORLD_LIMIT = 6.5
const LOOK_SENSITIVITY = 0.002

const movementKeys = new Set([
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'KeyA',
  'KeyD',
  'KeyS',
  'KeyW',
])

export function DesktopPlayerControls() {
  const { camera, gl } = useThree()
  const pressedKeys = useRef(new Set<string>())
  const yaw = useRef(camera.rotation.y)
  const pitch = useRef(camera.rotation.x)

  useEffect(() => {
    const canvas = gl.domElement

    const handleCanvasClick = () => {
      if (document.pointerLockElement !== canvas) {
        void canvas.requestPointerLock()
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement !== canvas) return

      yaw.current -= event.movementX * LOOK_SENSITIVITY
      pitch.current = MathUtils.clamp(
        pitch.current - event.movementY * LOOK_SENSITIVITY,
        -Math.PI / 2 + 0.05,
        Math.PI / 2 - 0.05,
      )
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!movementKeys.has(event.code)) return
      event.preventDefault()
      pressedKeys.current.add(event.code)
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys.current.delete(event.code)
    }

    const clearKeys = () => pressedKeys.current.clear()

    canvas.addEventListener('click', handleCanvasClick)
    document.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', clearKeys)

    return () => {
      canvas.removeEventListener('click', handleCanvasClick)
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', clearKeys)
    }
  }, [gl])

  useFrame((_, delta) => {
    const keys = pressedKeys.current
    const forward = Number(keys.has('KeyW') || keys.has('ArrowUp')) -
      Number(keys.has('KeyS') || keys.has('ArrowDown'))
    const right = Number(keys.has('KeyD') || keys.has('ArrowRight')) -
      Number(keys.has('KeyA') || keys.has('ArrowLeft'))

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
