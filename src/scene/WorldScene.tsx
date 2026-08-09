import type { WorldLocus } from './world'
import { LOCI, ROUTE_POINTS } from './world'

function Landmark({ locus }: { locus: WorldLocus }) {
  const [x, , z] = locus.position
  const material = <meshStandardMaterial color={locus.color} roughness={0.7} />

  switch (locus.kind) {
    case 'arch':
      return <group position={[x, 0, z]}>
        <mesh position={[-0.85, 1.1, 0]}><boxGeometry args={[0.35, 2.2, 0.45]} />{material}</mesh>
        <mesh position={[0.85, 1.1, 0]}><boxGeometry args={[0.35, 2.2, 0.45]} />{material}</mesh>
        <mesh position={[0, 2.15, 0]}><boxGeometry args={[2.05, 0.35, 0.45]} />{material}</mesh>
      </group>
    case 'bench':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 0.65, 0]}><boxGeometry args={[1.8, 0.25, 0.55]} />{material}</mesh>
        <mesh position={[0, 1.1, 0.24]} rotation={[-0.15, 0, 0]}><boxGeometry args={[1.8, 0.7, 0.18]} />{material}</mesh>
        <mesh position={[-0.65, 0.3, 0]}><boxGeometry args={[0.15, 0.6, 0.4]} /><meshStandardMaterial color="#713f12" /></mesh>
        <mesh position={[0.65, 0.3, 0]}><boxGeometry args={[0.15, 0.6, 0.4]} /><meshStandardMaterial color="#713f12" /></mesh>
      </group>
    case 'well':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 0.45, 0]}><cylinderGeometry args={[0.8, 0.9, 0.9, 12]} />{material}</mesh>
        <mesh position={[-0.75, 1.45, 0]}><boxGeometry args={[0.15, 2, 0.15]} /><meshStandardMaterial color="#78350f" /></mesh>
        <mesh position={[0.75, 1.45, 0]}><boxGeometry args={[0.15, 2, 0.15]} /><meshStandardMaterial color="#78350f" /></mesh>
        <mesh position={[0, 2.4, 0]} rotation={[0, 0, Math.PI / 4]}><coneGeometry args={[1.15, 0.7, 4]} />{material}</mesh>
      </group>
    case 'tree':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 1.25, 0]}><cylinderGeometry args={[0.25, 0.38, 2.5, 8]} /><meshStandardMaterial color="#854d0e" /></mesh>
        <mesh position={[0, 2.7, 0]}><sphereGeometry args={[1.2, 10, 8]} />{material}</mesh>
        {[-0.55, 0.05, 0.6].map((appleX, index) => <mesh key={appleX} position={[appleX, 2.6 + index * 0.25, 0.75]}><sphereGeometry args={[0.14, 8, 6]} /><meshStandardMaterial color="#ef4444" /></mesh>)}
      </group>
    case 'obelisk':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 0.2, 0]}><boxGeometry args={[1.25, 0.4, 1.25]} /><meshStandardMaterial color="#c4b5fd" /></mesh>
        <mesh position={[0, 1.65, 0]}><coneGeometry args={[0.55, 2.9, 4]} />{material}</mesh>
      </group>
    case 'pond':
      return <group position={[x, 0.03, z]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.25, 20]} />{material}</mesh>
        <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}><torusGeometry args={[1.25, 0.16, 8, 20]} /><meshStandardMaterial color="#e0f2fe" /></mesh>
        <mesh position={[0.25, 0.15, -0.15]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.35, 8]} /><meshStandardMaterial color="#84cc16" /></mesh>
      </group>
    case 'statue':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[1.2, 0.6, 1]} /><meshStandardMaterial color="#64748b" /></mesh>
        <mesh position={[0, 1.05, 0]} scale={[1.2, 0.8, 0.7]}><sphereGeometry args={[0.65, 8, 6]} />{material}</mesh>
        <mesh position={[0, 1.7, -0.15]}><sphereGeometry args={[0.48, 8, 6]} />{material}</mesh>
        <mesh position={[-0.28, 2.12, -0.15]} rotation={[0, 0, -0.25]}><coneGeometry args={[0.18, 0.65, 4]} />{material}</mesh>
        <mesh position={[0.28, 2.12, -0.15]} rotation={[0, 0, 0.25]}><coneGeometry args={[0.18, 0.65, 4]} />{material}</mesh>
      </group>
    case 'lantern':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 1.3, 0]}><cylinderGeometry args={[0.12, 0.18, 2.6, 8]} /><meshStandardMaterial color="#334155" /></mesh>
        <mesh position={[0, 2.65, 0]}><boxGeometry args={[0.85, 0.95, 0.85]} />{material}</mesh>
        <pointLight position={[0, 2.65, 0]} color={locus.color} intensity={4} distance={4} />
      </group>
    case 'windmill':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 1.1, 0]}><cylinderGeometry args={[0.55, 0.85, 2.2, 8]} />{material}</mesh>
        <mesh position={[0, 2.25, 0]} rotation={[0, 0, Math.PI / 4]}><coneGeometry args={[0.85, 0.8, 4]} /><meshStandardMaterial color="#fff7ed" /></mesh>
        <group position={[0, 1.75, 0.6]}>{[0, Math.PI / 2].map((rotation) => <mesh key={rotation} rotation={[0, 0, rotation]}><boxGeometry args={[0.22, 2.8, 0.12]} /><meshStandardMaterial color="#7c2d12" /></mesh>)}</group>
      </group>
    case 'fountain':
      return <group position={[x, 0, z]}>
        <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[1, 1.15, 0.5, 16]} /><meshStandardMaterial color="#e2e8f0" /></mesh>
        <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.15, 0.3, 0.8, 10]} />{material}</mesh>
        <mesh position={[0, 1.35, 0]} rotation={[0, 0, Math.PI]}><coneGeometry args={[0.65, 1.2, 5]} />{material}</mesh>
      </group>
  }
}

export function WorldScene() {
  return <>
    <color attach="background" args={['#c7e7f2']} />
    <fog attach="fog" args={['#c7e7f2', 13, 23]} />
    <hemisphereLight args={['#ffffff', '#365314', 1.8]} />
    <directionalLight position={[4, 8, 5]} intensity={2.2} castShadow />

    {ROUTE_POINTS.slice(0, -1).map((point, index) => {
      const next = ROUTE_POINTS[index + 1]
      const dx = next[0] - point[0]
      const dz = next[2] - point[2]
      return <mesh key={`route-${index}`} position={[(point[0] + next[0]) / 2, 0.015, (point[2] + next[2]) / 2]} rotation={[-Math.PI / 2, 0, -Math.atan2(dz, dx)]}>
        <planeGeometry args={[Math.hypot(dx, dz) + 0.35, 1.45]} />
        <meshStandardMaterial color="#e7d5b0" />
      </mesh>
    })}
    {LOCI.map((locus) => <Landmark key={locus.id} locus={locus} />)}

    <mesh position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[22, 22]} />
      <meshStandardMaterial color="#65a30d" />
    </mesh>
  </>
}
