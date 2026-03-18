import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

const CAM_START_Z = 400
const CAM_END_Z = 41
const CAM_START_Y = 18
const CAM_END_Y = 2
const CAM_DURATION = 5.2

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function CameraRig({ section = 0 }) {

  const start = useRef(null)

  // manual mouse tracking + gyro tracking
  const mouse = useRef({ x: 0, y: 0, gyroX: 0, gyroY: 0 })

  useEffect(() => {

    const handleMove = (e) => {

      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

    }

    window.addEventListener("mousemove", handleMove)

    // --- GYRO: added for mobile, does not affect desktop ---
    const handleOrientation = (e) => {
      const gamma = e.gamma ?? 0  // left/right tilt → X
      const beta  = e.beta  ?? 0  // forward/back tilt → Y
      mouse.current.gyroX = Math.max(-1, Math.min(1, gamma / 30))
      mouse.current.gyroY = Math.max(-1, Math.min(1, (beta - 45) / 30))
    }

    window.addEventListener("deviceorientation", handleOrientation)
    // ------------------------------------------------------

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("deviceorientation", handleOrientation) // added
    }

  }, [])

  const sectionOffsets = [
    [0, 0],
    [4, 1],
    [-4, 1],
    [0, 2]
  ]

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

      const [sx, sy] = sectionOffsets[section] || [0, 0]

      // --- GYRO: pick input source based on device, same multipliers as before ---
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      const swayX = isMobile ? mouse.current.gyroX * 2 : mouse.current.x * 2
      const swayY = isMobile ? mouse.current.gyroY * 1 : mouse.current.y * 1
      // ---------------------------------------------------------------------------

      camera.position.x += ((Math.sin(t * 0.1) * 0.5 + sx + swayX) - camera.position.x) * 0.05
      camera.position.y += ((CAM_END_Y + sy + swayY) - camera.position.y) * 0.05
      camera.position.z += (CAM_END_Z - camera.position.z) * 0.05
    }

    camera.lookAt(0, 0, 0)

  })

  return null
}

export { CAM_START_Y, CAM_START_Z }

// --- GYRO: iOS 13+ requires explicit permission before deviceorientation fires.
//     Drop <RequestGyroPermission /> anywhere in your UI (e.g. a splash/intro screen).
//     Android grants access automatically — this component is a no-op there.
export function RequestGyroPermission({ label = "Enable Motion Controls" }) {
  const request = async () => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      const result = await DeviceOrientationEvent.requestPermission()
      if (result !== "granted") console.warn("Gyroscope permission denied")
    }
  }
  return <button onClick={request}>{label}</button>
}