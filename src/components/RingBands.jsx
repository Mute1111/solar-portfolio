import { useMemo } from "react"
import * as THREE from "three"

const RING_INNER = 12
const RING_OUTER = 19
const BAND_COUNT = 100

export default function RingBands() {
  const bands = useMemo(() => {
    return Array.from({ length: BAND_COUNT }, (_, i) => {
      const t = i / (BAND_COUNT - 1)

      const inner = RING_INNER + t * (RING_OUTER - RING_INNER) * 0.85
      const outer = inner + (RING_OUTER - RING_INNER) / BAND_COUNT * 1.1

      const opacity = 0.15 + Math.sin(t * Math.PI) * 0.45

      const brightness = Math.floor((180 + t * 60) * (0.8 + Math.random() * 0.2))

      const hex =
        (brightness << 16) |
        (Math.floor(brightness * 0.92) << 8) |
        Math.floor(brightness * 0.75)

      return { inner, outer, opacity, color: hex }
    })
  }, [])

  return (
    <>
      {bands.map((band, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
          <ringGeometry args={[band.inner, band.outer, 160]} />
          <meshStandardMaterial
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
