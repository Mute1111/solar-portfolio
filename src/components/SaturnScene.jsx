import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useGLTF } from "@react-three/drei"

import CameraRig, { CAM_START_Y, CAM_START_Z } from "./CameraRig"
import Planet from "./Planet"
import CassiniFlyby from "./CassiniFlyby"

// Detect once at module level — stable, no re-renders
const isMobile = /Mobi|Android/i.test(navigator.userAgent)

export default function SaturnScene({ section }) {
  return (
    // FIX: 100vh → 100dvh so mobile browser chrome doesn't clip the canvas
    <div style={{ width: "100vw", height: "100dvh" }}>
      <Canvas
        style={{ pointerEvents: "auto" }}
        // FIX: shadows disabled on mobile — expensive and not visually critical
        shadows={!isMobile}
        dpr={[1, 1.5]}
        // FIX: wider FOV on mobile (35 is too narrow on portrait screens → crops model)
        camera={{ position: [0, CAM_START_Y, CAM_START_Z], fov: isMobile ? 60 : 35 }}
        gl={{ antialias: !isMobile }}
      >
        <color attach="background" args={["black"]} />

        <directionalLight
          position={[150, 120, -180]}
          intensity={3}
          // FIX: castShadow disabled on mobile to match shadows={!isMobile}
          castShadow={!isMobile}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
          shadow-radius={6}
          shadow-camera-near={0.1}
          shadow-camera-far={1000}
          shadow-camera-left={-200}
          shadow-camera-right={200}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />

        <CameraRig section={section} />

        <Suspense
          fallback={
            // FIX: loading indicator instead of blank black screen on slow connections
            <mesh>
              <sphereGeometry args={[0.5, 16, 16]} />
              <meshBasicMaterial color="#888" wireframe />
            </mesh>
          }
        >
          <Planet
            path="/Models/Saturn.glb"
            position={[0, 0, 0]}
            scale={0.02}
            tilt={0.47}
            hasRings
          />

          <CassiniFlyby />
        </Suspense>

        {isMobile ? (
          // FIX: bumped from 0.4 → 0.7 to compensate for missing HDR ambient on mobile
          <ambientLight intensity={0.7} />
        ) : (
          <Environment preset="night" />
        )}

        {!isMobile && (
          <EffectComposer>
            <Bloom
              intensity={0.4}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        )}

      </Canvas>
    </div>
  )
}

useGLTF.preload("/Models/Saturn.glb")
// FIX: only preload Cassini on desktop — saves mobile bandwidth on initial load
if (!isMobile) useGLTF.preload("/Models/Cassini.glb")