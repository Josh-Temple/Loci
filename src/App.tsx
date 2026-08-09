import { Canvas } from '@react-three/fiber'
import { DesktopPlayerControls } from './scene/DesktopPlayerControls'
import { WorldScene } from './scene/WorldScene'

export function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Memory palace experiment</p>
        <h1>Loci</h1>
      </header>
      <section className="scene" aria-label="Walkable 3D memory palace">
        <Canvas camera={{ position: [0, 1.65, 5], fov: 60 }} dpr={[1, 2]}>
          <WorldScene />
          <DesktopPlayerControls />
        </Canvas>
        <div className="crosshair" aria-hidden="true" />
        <aside className="desktop-help">
          <strong>Explore the palace</strong>
          <span>Click the scene to look around</span>
          <span>Move with W A S D or arrow keys · Esc releases the cursor</span>
        </aside>
      </section>
    </main>
  )
}
