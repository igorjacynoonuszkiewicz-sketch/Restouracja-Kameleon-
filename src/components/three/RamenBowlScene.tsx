import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ContactShadows } from '@react-three/drei'
import RamenBowl from './RamenBowl'
import Steam from './Steam'

export default function RamenBowlScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 2.6, 3.4], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.75, 0)}
    >
      <fog attach="fog" args={['#0c0c0e', 5.5, 10]} />

      <ambientLight intensity={0.5} color="#2c2722" />
      <pointLight position={[2.6, 3.2, 2.4]} intensity={62} color="#f0c98a" distance={14} decay={2} />
      <pointLight position={[-3, 1.4, -2]} intensity={28} color="#d3392b" distance={11} decay={2} />
      <directionalLight position={[0, 5, 3]} intensity={0.55} color="#cfd6dd" />

      <Suspense fallback={null}>
        <RamenBowl />
        <Steam originY={1.15} radius={1.0} height={2.8} />
        <ContactShadows position={[0, 0.02, 0]} opacity={0.55} scale={6} blur={2.4} far={2} color="#000000" />
      </Suspense>
    </Canvas>
  )
}
