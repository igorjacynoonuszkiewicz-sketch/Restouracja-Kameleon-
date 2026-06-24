import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { seededRandom } from './seededRandom'

function Dumpling({ seed }: { seed: number }) {
  const ref = useRef<THREE.Group>(null)
  const data = useMemo(() => {
    const rand = (n: number) => seededRandom(seed, n)
    return {
      x: (rand(1) - 0.5) * 7,
      y: (rand(2) - 0.5) * 3.4,
      z: -2 - rand(3) * 4,
      scale: 0.35 + rand(4) * 0.45,
      speed: 0.3 + rand(5) * 0.4,
      rotSpeed: (rand(6) - 0.5) * 0.6,
      floatAmp: 0.25 + rand(7) * 0.35,
      phase: rand(8) * Math.PI * 2,
    }
  }, [seed])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.y = data.y + Math.sin(t * data.speed + data.phase) * data.floatAmp
    ref.current.position.x = data.x + Math.cos(t * data.speed * 0.6 + data.phase) * 0.3
    ref.current.rotation.y += data.rotSpeed * 0.01
    ref.current.rotation.z = Math.sin(t * 0.3 + data.phase) * 0.15
  })

  return (
    <group ref={ref} position={[data.x, data.y, data.z]} scale={data.scale}>
      <mesh scale={[1, 0.6, 0.78]}>
        <sphereGeometry args={[0.5, 24, 16]} />
        <meshStandardMaterial color="#f0e6d2" roughness={0.65} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.18, 0]}>
        <torusGeometry args={[0.46, 0.055, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#dcccaa" roughness={0.6} />
      </mesh>
    </group>
  )
}

interface FloatingDumplingsProps {
  count?: number
  className?: string
}

export default function FloatingDumplings({ count = 9, className = '' }: FloatingDumplingsProps) {
  return (
    <Canvas
      className={className}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.8} color="#7a5a40" />
      <pointLight position={[3, 3, 4]} intensity={45} color="#ffd9a8" distance={16} decay={2} />
      <pointLight position={[-4, -2, 2]} intensity={18} color="#d6293f" distance={12} decay={2} />
      {Array.from({ length: count }).map((_, i) => (
        <Dumpling key={i} seed={i + 1} />
      ))}
    </Canvas>
  )
}
