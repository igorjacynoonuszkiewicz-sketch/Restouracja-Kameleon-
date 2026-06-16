import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { getSteamTexture } from './steamTexture'

interface Particle {
  baseX: number
  baseZ: number
  speed: number
  offset: number
  scale: number
  swayFreq: number
  swayAmp: number
}

interface SteamProps {
  count?: number
  radius?: number
  height?: number
  originY?: number
}

export default function Steam({ count = 22, radius = 1.1, height = 3.6, originY = 0.9 }: SteamProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const texture = useMemo(() => getSteamTexture(), [])

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }).map(() => ({
      baseX: (Math.random() - 0.5) * radius,
      baseZ: (Math.random() - 0.5) * radius,
      speed: 0.35 + Math.random() * 0.45,
      offset: Math.random() * height,
      scale: 0.5 + Math.random() * 0.9,
      swayFreq: 0.5 + Math.random() * 0.8,
      swayAmp: 0.15 + Math.random() * 0.25,
    }))
  }, [count, radius, height])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    const t = state.clock.elapsedTime

    particles.forEach((p, i) => {
      p.offset += delta * p.speed
      const progress = (p.offset % height) / height
      const y = originY + progress * height
      const fade = Math.sin(progress * Math.PI)
      const sway = Math.sin(t * p.swayFreq + i) * p.swayAmp * progress

      dummy.position.set(p.baseX + sway, y, p.baseZ + Math.cos(t * p.swayFreq * 0.7 + i) * p.swayAmp * progress)
      const scale = p.scale * (0.5 + progress * 0.9)
      dummy.scale.set(scale, scale, scale)
      dummy.rotation.z = t * 0.1 + i
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)

      mesh.userData.opacities = mesh.userData.opacities || []
      mesh.userData.opacities[i] = fade
    })

    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[0.7, 0.7]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.45}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#fff3df"
      />
    </instancedMesh>
  )
}
