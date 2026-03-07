import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"


export default function Planet({ path, position, scale, tilt = 0, hasRings }) {
  const { scene } = useGLTF(path)
  const ref = useRef()

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.002
  })

  return (
    <group position={position}>
      <group rotation={[tilt, 0, 0]}>
        <primitive ref={ref} object={scene} scale={scale} />
   
      </group>
    </group>
  )
}
