import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";

function Model({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

function Scene({ modelUrl }) {
  return (
    <Canvas camera={{ fov: 45 }} style={{ position: "relative" }}>
      <Stage environment={"sunset"}>
        <RotatingModel modelUrl={modelUrl} />
      </Stage>
    </Canvas>
  );
}

function RotatingModel({ modelUrl }) {
  useFrame((state, delta) => {
    state.scene.rotation.y += 0.90 * delta;
  });

  return <Model modelUrl={modelUrl} />;
}

export default Scene;
