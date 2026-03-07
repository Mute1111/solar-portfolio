import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useTexture } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useGLTF } from "@react-three/drei"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

import CameraRig, { CAM_START_Y, CAM_START_Z } from "./CameraRig"
import Planet from "./Planet"
import CassiniFlyby from "./CassiniFlyby"



export default function SaturnScene({section}) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
       style={{ pointerEvents: "auto" }}
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, CAM_START_Y, CAM_START_Z], fov: 35 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["black"]} />

      <directionalLight
  position={[150, 120, -180]}  // slightly changed from [200, 80, -200]
  intensity={3}
  castShadow
  shadow-mapSize-width={4096}
  shadow-mapSize-height={4096}
  shadow-bias={-0.000}        // keep original
  shadow-radius={1000}         // keep original
  shadow-camera-near={0.1}
  shadow-camera-far={1000}
  shadow-camera-left={-200}
  shadow-camera-right={200}
  shadow-camera-top={100}
  shadow-camera-bottom={-100}
/>

      
       <CameraRig section={section} />
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