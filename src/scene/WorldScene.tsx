export function WorldScene() {
  return (
    <>
      <color attach="background" args={['#dbeafe']} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[4, 6, 3]} intensity={2} />

      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#86a789" />
      </mesh>
    </>
  )
}
