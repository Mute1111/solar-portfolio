import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import SaturnRings from "./SaturnRings"

export default function Planet({ path, position, scale, tilt = 0, hasRings }) {
  const { scene } = useGLTF(path)
  const ref = useRef()

  useMemo(() => {
    scene.traverse(child => {
      if (child.isMesh) child.castShadow = true
    })
  }, [scene])

  useFrame(() => {
    if (ref.current)
      ref.current.rotation.y += 0.003
  })

  return (
    <group position={position} rotation={[tilt, 0, 0]}>
      <primitive ref={ref} object={scene} scale={scale} />
      {hasRings && <SaturnRings ringRadius={1} />}
    </group>
  )
}
