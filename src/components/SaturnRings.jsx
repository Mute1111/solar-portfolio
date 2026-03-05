import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Noise } from "noisejs"
import RingBands from "./RingBands"

const RING_INNER = 12
const RING_OUTER = 19
const DEBRIS_COUNT = 6000
const DEBRIS_SIZE = 0.05
const RING_TILT = 0.01
const DEBRIS_THICKNESS = 1

export default function SaturnRings({ ringRadius = 2.5 }) {
  const debrisRef = useRef()
  const ringGroupRef = useRef()

  const { geometry, material, noise } = useMemo(() => {
    const noise = new Noise(42)

    const geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(DEBRIS_COUNT * 3)
    const colors = new Float32Array(DEBRIS_COUNT * 3)

    for (let i = 0; i < DEBRIS_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2

      const r =
        RING_INNER * ringRadius +
        Math.pow(Math.random(), 1.4) * (RING_OUTER - RING_INNER) * ringRadius

      positions[i * 3] = r * Math.cos(theta)
      positions[i * 3 + 1] = (Math.random() - 0.5) * DEBRIS_THICKNESS
      positions[i * 3 + 2] = r * Math.sin(theta)

      const brightness = 0.6 + Math.random() * 0.4

      colors[i * 3] = brightness
      colors[i * 3 + 1] = brightness * 0.93
      colors[i * 3 + 2] = brightness * 0.78
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: DEBRIS_SIZE,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    return { geometry, material, noise }
  }, [ringRadius])

  useFrame(({ clock }) => {
    if (ringGroupRef.current)
      ringGroupRef.current.rotation.y += 0.0003

    if (!debrisRef.current) return

    const time = clock.getElapsedTime()
    const arr = debrisRef.current.geometry.attributes.position.array

    for (let i = 0; i < arr.length / 3; i++) {
      const x = arr[i * 3]
      const z = arr[i * 3 + 2]

      const angle = Math.atan2(z, x)
      const r = Math.sqrt(x * x + z * z)

      arr[i * 3 + 1] =
        noise.perlin2(angle * 2, time * 0.08 + r * 0.1) *
        DEBRIS_THICKNESS
    }

    debrisRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group rotation={[RING_TILT, 0, 0]}>
      <group ref={ringGroupRef}>
        <RingBands />
        <points ref={debrisRef} geometry={geometry} material={material} />
      </group>
    </group>
  )
}
