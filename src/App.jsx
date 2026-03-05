import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Stars, Environment } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"
import { Noise } from "noisejs"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import React from "react"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🪐 RING TUNING KNOBS — tweak these freely
const RING_INNER   = 20   // how close rings start to planet center
const RING_OUTER   = 12   // how far rings extend outward
const BAND_COUNT   = 60     // number of distinct ring bands
const DEBRIS_COUNT = 18000 // particle density (more = heavier GPU)
const DEBRIS_SIZE  = 0.05 // individual particle dot size
const RING_TILT    = 0.010  // should match your planet tilt prop
const DEBRIS_THICKNESS = 1 // vertical spread of particles (volume feel)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Builds a gradient-style ring using multiple translucent bands
function RingBands() {
  const bands = Array.from({ length: BAND_COUNT }, (_, i) => {
    const t     = i / (BAND_COUNT - 1)
    const inner = RING_INNER + t * (RING_OUTER - RING_INNER) * 0.85
    const outer = inner + (RING_OUTER - RING_INNER) / BAND_COUNT * 1.1
    const opacity = 0.15 + Math.sin(t * Math.PI) * 0.45  // fade at edges
    const brightness = Math.floor((180 + t * 60) * (0.8 + Math.random() * 0.2))
    const hex = (brightness << 16) | (Math.floor(brightness * 0.92) << 8) | Math.floor(brightness * 0.75)
    return { inner, outer, opacity, color: hex }
  })

  return (
    <>
      {bands.map((band, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[band.inner, band.outer, 160]} />
          <meshBasicMaterial
            color={band.color}
            transparent
            opacity={band.opacity}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  )
}

function SaturnRings({ ringRadius = 2.5 }) {
  const debrisRef = useRef()
  const ringGroupRef = useRef()

  const { debrisGeometry, debrisMaterial, noise } = React.useMemo(() => {
    const noise = new Noise(42)
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(DEBRIS_COUNT * 3)
    const colors    = new Float32Array(DEBRIS_COUNT * 3)

    for (let i = 0; i < DEBRIS_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      // Weighted distribution — denser toward inner ring
      const r = RING_INNER * ringRadius + Math.pow(Math.random(), 1.4) * (RING_OUTER - RING_INNER) * ringRadius

      positions[i * 3]     = r * Math.cos(theta)
      positions[i * 3 + 1] = (Math.random() - 0.5) * DEBRIS_THICKNESS  // vertical volume
      positions[i * 3 + 2] = r * Math.sin(theta)

      // Warm ice/rock color variation per particle
      const brightness = 0.6 + Math.random() * 0.4
      colors[i * 3]     = brightness
      colors[i * 3 + 1] = brightness * 0.93
      colors[i * 3 + 2] = brightness * 0.78
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: DEBRIS_SIZE,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    return { debrisGeometry: geometry, debrisMaterial: material, noise }
  }, [ringRadius])

  useFrame(({ clock }) => {
    // Slowly rotate the whole ring group
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.y += 0.0003
    }

    // Perlin-based vertical ripple on debris particles
    if (debrisRef.current) {
      const time = clock.getElapsedTime()
      const arr  = debrisRef.current.geometry.attributes.position.array
      const count = arr.length / 3
      for (let i = 0; i < count; i++) {
        const x = arr[i * 3]
        const z = arr[i * 3 + 2]
        const angle = Math.atan2(z, x)
        const r     = Math.sqrt(x * x + z * z)
        arr[i * 3 + 1] = noise.perlin2(angle * 2, time * 0.08 + r * 0.1) * DEBRIS_THICKNESS
      }
      debrisRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    // Tilt the entire ring system to match the planet
    <group rotation={[RING_TILT, 0, 0]}>
      <group ref={ringGroupRef}>
        {/* Flat shaded bands for base ring look */}
        <RingBands />

        {/* Particle debris cloud on top */}
        <points ref={debrisRef} geometry={debrisGeometry} material={debrisMaterial} />
      </group>
    </group>
  )
}

function Planet({ path, position, scale, tilt = 0, hasRings = false }) {
  const { scene } = useGLTF(path)
  const ref = useRef()

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    camera.position.x = Math.sin(t * 0.1) * 0.5
    camera.lookAt(0, 0, 0)

    if (ref.current) {
      ref.current.rotation.y += 0.003
    }
  })

  return (
    <group position={position} rotation={[tilt, 0, 0]}>
      {/* Planet gets its own scale */}
      <primitive ref={ref} object={scene} scale={scale} />

      {/* ringRadius = world-space multiplier. Tweak if rings still clip planet */}
      {hasRings && <SaturnRings ringRadius={1.0} />}
    </group>
  )
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 41], fov: 35 }}>
        <color attach="background" args={["#000000"]} />

        {/* Soft base light */}
        <ambientLight intensity={0.3} />

        {/* Key light */}
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* Rim light for edge glow */}
        <pointLight position={[-5, -2, -5]} intensity={1.5} />

        <Suspense fallback={null}>
          <Planet
            path="/Models/Saturn.glb"
            position={[0, 0, 0]}
            scale={0.02}
            tilt={0.47}
            hasRings={true}
          />
        </Suspense>

        <OrbitControls />

        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* Optional space lighting */}
        <Environment preset="night" />

        {/* Bloom for subtle glow */}
        <EffectComposer>
          <Bloom
            intensity={0.4}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}