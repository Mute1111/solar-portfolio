import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Environment } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useGLTF } from "@react-three/drei"

import CameraRig, { CAM_START_Y, CAM_START_Z } from "./CameraRig"
import Planet from "./Planet"
import CassiniFlyby from "./CassiniFlyby"

export default function SaturnScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, CAM_START_Y, CAM_START_Z], fov: 35 }}>

        <color attach="background" args={["black"]} />

        <ambientLight intensity={0.2} />

        <directionalLight
          position={[200, 80, -200]}
          intensity={4}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <CameraRig />

        <Suspense fallback={null}>
          <Planet
            path="/Models/Saturn.glb"
            position={[0, 0, 0]}
            scale={0.02}
            tilt={0.47}
            hasRings
          />

          <CassiniFlyby />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

        <Stars radius={500} depth={100} count={8000} factor={6} fade />

        <Environment preset="night" />

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

useGLTF.preload("/Models/Saturn.glb")
useGLTF.preload("/Models/Cassini.glb")
