import { Canvas } from '@react-three/fiber';
import { CameraControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./GothicScene.glb");

  let mixer = null;
  let keyframeAnimation = null;

  if (gltf.animations.length > 0) {
    keyframeAnimation = gltf.animations[0];
    mixer = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.clipAction(keyframeAnimation);
    action.play();
  }

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return <primitive object={gltf.scene} scale={0.4} />;
};

const Scene = () => {
  return (
    <group>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <Model />
      <ambientLight intensity={0.5} color="rgb(55,31,110)" />
      <directionalLight color="lightblue" intensity={1} position={[20, 10, 20]} />
      <pointLight decay={1.5} distance={10} intensity={5} color="orange" position={[-3, 1, 0]} />
      <PerspectiveCamera makeDefault position={[10, 10, 10]} />
      <EffectComposer>
        <Bloom luminanceThreshold={1} luminanceSmoothing={10} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </group>
  );
};

export default function GothicScene() {
  return (
    <Canvas style={{ width: '100%', height: '100vh', background: 'linear-gradient(0deg, rgba(22,19,32,1) 0%, rgba(55,31,110,1) 100%)' }}>
      <Scene />
    </Canvas>
  );
}
