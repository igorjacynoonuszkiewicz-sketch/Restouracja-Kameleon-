import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const bowlProfile = [
  [0, 0],
  [0.46, 0.02],
  [0.5, 0.12],
  [0.62, 0.32],
  [0.85, 0.58],
  [1.18, 0.86],
  [1.42, 1.04],
  [1.56, 1.16],
  [1.62, 1.22],
  [1.56, 1.27],
].map(([x, y]) => new THREE.Vector2(x, y))

function Bowl() {
  const geometry = useMemo(() => new THREE.LatheGeometry(bowlProfile, 64), [])
  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshPhysicalMaterial
        color="#1c1411"
        roughness={0.38}
        metalness={0.1}
        clearcoat={0.55}
        clearcoatRoughness={0.25}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Broth() {
  return (
    <group position={[0, 1.05, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.4, 64]} />
        <meshPhysicalMaterial color="#b5691f" roughness={0.18} clearcoat={0.6} clearcoatRoughness={0.15} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 0]}>
        <ringGeometry args={[1.0, 1.36, 64]} />
        <meshStandardMaterial color="#7a1424" roughness={0.3} transparent opacity={0.75} />
      </mesh>
    </group>
  )
}

function Noodles() {
  const curve = useMemo(() => {
    const points = [
      new THREE.Vector3(-0.55, 1.1, 0.1),
      new THREE.Vector3(-0.25, 1.16, -0.3),
      new THREE.Vector3(0.1, 1.08, 0.25),
      new THREE.Vector3(0.4, 1.18, -0.15),
      new THREE.Vector3(0.65, 1.1, 0.2),
    ]
    return new THREE.CatmullRomCurve3(points)
  }, [])

  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 64, 0.045, 8, false), [curve])

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#e8d9a0" roughness={0.5} />
    </mesh>
  )
}

function ChashuSlice({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.44, 0.032, 0.3]} />
      <meshStandardMaterial color="#caa178" roughness={0.55} />
    </mesh>
  )
}

function EggHalf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh scale={[1, 0.34, 1]}>
        <sphereGeometry args={[0.26, 32, 16]} />
        <meshStandardMaterial color="#f3ecd9" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.13, 24]} />
        <meshStandardMaterial color="#d98a2b" roughness={0.3} />
      </mesh>
    </group>
  )
}

function Nori() {
  return (
    <mesh position={[-0.75, 1.18, -0.25]} rotation={[0.3, 0.5, 0.15]}>
      <planeGeometry args={[0.4, 0.55]} />
      <meshStandardMaterial color="#10160f" roughness={0.6} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Scallions() {
  const positions: [number, number, number][] = [
    [0.15, 1.2, 0.35],
    [0.3, 1.22, 0.42],
    [-0.1, 1.21, 0.4],
    [0.45, 1.19, 0.3],
  ]
  return (
    <group>
      {positions.map((p, i) => (
        <mesh key={i} position={p} rotation={[Math.PI / 2.2, Math.random(), Math.random()]}>
          <cylinderGeometry args={[0.025, 0.025, 0.32, 8]} />
          <meshStandardMaterial color="#6fa356" roughness={0.5} />
        </mesh>
      ))}
    </group>
  )
}

export default function RamenBowl() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.28
    group.current.position.y = 0.05 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04
  })

  return (
    <group ref={group}>
      <Bowl />
      <Broth />
      <Noodles />
      <ChashuSlice position={[-0.3, 1.13, 0.15]} rotation={[0, 0.4, 0.05]} />
      <ChashuSlice position={[0.05, 1.16, -0.3]} rotation={[0, 1.1, -0.05]} />
      <EggHalf position={[0.55, 1.1, -0.05]} />
      <Nori />
      <Scallions />
    </group>
  )
}
