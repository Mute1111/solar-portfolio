import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { Suspense, useRef, useEffect } from "react"
import * as THREE from "three"

function Jupiter() {
  const { scene } = useGLTF("/Models/Jupiter.glb")
  const ref = useRef()

  useEffect(() => {
    // Center the model
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)

    // Auto scale to reasonable size
    const size = box.getSize(new THREE.Vector3()).length()
    const scaleFactor = 3 / size
    scene.scale.setScalar(scaleFactor)
  }, [scene])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return <primitive ref={ref} object={scene} />
}

export default function App() {
  return (
   <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <color attach="background" args={["black"]} />

      {/* Strong lighting so nothing renders black */}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Suspense fallback={null}>
        <Jupiter />
      </Suspense>
    </Canvas>
  )
}