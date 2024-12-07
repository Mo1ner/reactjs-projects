import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function App() {
  const earthModel = useGLTF("earth.gltf");

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls
          minDistance={2}
          maxPolarAngle={5}
          zoomSpeed={1}
          enableDamping={true}
          dampingFactor={0.1}
        />
        <Suspense fallback={null}>
          <primitive object={earthModel.scene} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
