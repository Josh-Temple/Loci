import { Canvas } from '@react-three/fiber'
import { WorldScene } from './scene/WorldScene'

export function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Memory palace experiment</p>
        <h1>Loci</h1>
      </header>
      <section className="scene" aria-label="3D memory palace preview">
        <Canvas camera={{ position: [4, 3, 6], fov: 50 }} dpr={[1, 2]}>
          <WorldScene />
        </Canvas>
      </section>
    </main>
  )
}
