import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const CAM_START_Z = 400
const CAM_END_Z = 41
const CAM_START_Y = 18
const CAM_END_Y = 2
const CAM_DURATION = 5.2

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function CameraRig() {
  const start = useRef(null)

  useFrame(({ camera, clock }) => {
    if (start.current === null)
      start.current = clock.getElapsedTime()

    const elapsed = clock.getElapsedTime() - start.current

    if (elapsed < CAM_DURATION) {
      const t = easeOutExpo(elapsed / CAM_DURATION)

      camera.position.z = CAM_START_Z + (CAM_END_Z - CAM_START_Z) * t
      camera.position.y = CAM_START_Y + (CAM_END_Y - CAM_START_Y) * t
      camera.position.x = 0
    } else {
      const t = elapsed - CAM_DURATION

      camera.position.x = Math.sin(t * 0.1) * 0.5
      camera.position.z = CAM_END_Z
      camera.position.y = CAM_END_Y
    }

    camera.lookAt(0, 0, 0)
  })

  return null
}

export { CAM_START_Y, CAM_START_Z }
