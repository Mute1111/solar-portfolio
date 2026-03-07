import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

const CAM_DURATION = 5.2
const FLYBY_TRIGGER = CAM_DURATION + 2
const FLYBY_DURATION = 7
const FLYBY_SCALE = 0.08

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export default function CassiniFlyby() {
  const { scene } = useGLTF("/Models/Cassini.glb")

  const ref = useRef()
  const start = useRef(null)

// Start: High and to the left, but deep in the background
const START = new THREE.Vector3(-40, 15, -10) 

// MID: This is the "apex" of the curve. 
// Increasing Z to 35-45 usually brings it right against the glass.
const MID = new THREE.Vector3(5, 0, 45) 

// END: Dives down and to the right, disappearing behind/beside the camera
const END = new THREE.Vector3(40, -15, 20)

  const nextPos = new THREE.Vector3()

  useFrame(({ clock }) => {
    if (!ref.current) return

    if (start.current === null)
      start.current = clock.getElapsedTime()

    const elapsed = clock.getElapsedTime() - start.current

    const flyTime = elapsed - FLYBY_TRIGGER

    if (flyTime < 0 || flyTime > FLYBY_DURATION) {
      ref.current.visible = false
      return
    }

    ref.current.visible = true

    const t = easeInOutQuad(flyTime / FLYBY_DURATION)
    const u = 1 - t

    const pos = new THREE.Vector3(
      u*u*START.x + 2*u*t*MID.x + t*t*END.x,
      u*u*START.y + 2*u*t*MID.y + t*t*END.y,
      u*u*START.z + 2*u*t*MID.z + t*t*END.z
    )

    ref.current.position.copy(pos)

    const nt = Math.min(t + 0.01, 1)
    const nu = 1 - nt

    nextPos.set(
      nu*nu*START.x + 2*nu*nt*MID.x + nt*nt*END.x,
      nu*nu*START.y + 2*nu*nt*MID.y + nt*nt*END.y,
      nu*nu*START.z + 2*nu*nt*MID.z + nt*nt*END.z
    )

    ref.current.lookAt(nextPos)

    ref.current.rotation.z += 0.02
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={FLYBY_SCALE}
      visible={false}
    />
  )
}
