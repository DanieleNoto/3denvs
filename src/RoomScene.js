import { useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, PivotControls, PerspectiveCamera, Shadow } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';



export default function RoomScene() {
  return (
    <Canvas shadows style={{width: '100%', height: '100vh', background:'radial-gradient(circle, rgba(201,196,164,1) 0%, rgba(95,157,208,1) 100%)'}} camera={{ position: [-15, 10, 15], fov: 25 }}>
      
      <House />
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={1.5} />
    </Canvas>
  )
}



const Couch = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Couch.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Tv = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/TV.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Room = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Room.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const RugAndTable = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/RugAndTable.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Plant = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Plant.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Picture = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Picture.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Decoration = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Decoration.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const Door = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/Door.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};

const BookCase = () => {
  const gltf = useLoader(GLTFLoader, "./RoomAsset/BookCase.glb");
  return <primitive object={gltf.scene} scale={0.4} />;
};




function House(props) {
  const csgCouch = useRef();
  const csgTV = useRef();
  const [scaleCouch, setScaleCouch] = useState(0);
  const [scaleTV, setScaleTV] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const csgPlant = useRef();
  const csgPicture = useRef();
  const csgDecoration = useRef();
  const csgDoor = useRef();
  const csgBookCase = useRef();

  const [scalePlant, setScalePlant] = useState(0);
  const [scalePicture, setScalePicture] = useState(0);
  const [scaleDecoration, setScaleDecoration] = useState(0);
  const [scaleDoor, setScaleDoor] = useState(0);
  const [scaleBookCase, setScaleBookCase] = useState(0);

  const toggleCouchController = () => {
    setScaleCouch(prevScale => (prevScale === 0 ? 0.5 : 0));
    setScaleTV(0); // Reset TV scale
  };

  const toggleTvController = () => {
    setScaleTV(prevScale => (prevScale === 0 ? 0.5 : 0));
    setScaleCouch(0); // Reset Couch scale
  };

  const csgRugAndTable = useRef();
  const [scaleRugAndTable, setScaleRugAndTable] = useState(0);

  const toggleRugAndTableController = () => {
    setScaleRugAndTable(prevScale => (prevScale === 0 ? 0.5 : 0));
    setScaleCouch(0); // Reset Couch scale
    setScaleTV(0); // Reset TV scale
  };

  const togglePlantController = () => {
    setScalePlant(prevScale => (prevScale === 0 ? 0.5 : 0));
    // Reset other scales
  };

  const togglePictureController = () => {
    setScalePicture(prevScale => (prevScale === 0 ? 0.5 : 0));
    // Reset other scales
  };

  const toggleDecorationController = () => {
    setScaleDecoration(prevScale => (prevScale === 0 ? 0.5 : 0));
    // Reset other scales
  };

  const toggleDoorController = () => {
    setScaleDoor(prevScale => (prevScale === 0 ? 0.5 : 0));
    // Reset other scales
  };

  const toggleBookCaseController = () => {
    setScaleBookCase(prevScale => (prevScale === 0 ? 0.5 : 0));
    // Reset other scales
  };


  return (
    
    <PerspectiveCamera position={[0,0,-1]}>
    <mesh receiveShadow castShadow {...props}>
      <mesh onClick={toggleCouchController}>
        <PivotControls
          ref={csgCouch}
          rotation={rotation}
          activeAxes={[true, false, true]}
          scale={scaleCouch}
          anchor={[0, 0, 0]}
          onDrag={() => csgCouch.current.update && csgCouch.current.update()}
        >
          <Couch />
        </PivotControls>
      </mesh>

      <mesh onClick={toggleTvController}>
        <PivotControls
          ref={csgTV}
          rotation={rotation}
          activeAxes={[true, false, true]}
          scale={scaleTV}
          anchor={[0, 0, 0]}
          onDrag={() => csgTV.current.update && csgTV.current.update()}
        >
          <Tv />
        </PivotControls>
      </mesh>

      <mesh onClick={toggleRugAndTableController}>
          <PivotControls
            ref={csgRugAndTable}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scaleRugAndTable}
            anchor={[0, 0, 0]}
            onDrag={() => csgRugAndTable.current.update && csgRugAndTable.current.update()}
          >
            <RugAndTable />
          </PivotControls>
        </mesh>
        <mesh onClick={togglePlantController}>
          <PivotControls
            ref={csgPlant}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scalePlant}
            anchor={[0, 0, 0]}
            onDrag={() => csgPlant.current.update && csgPlant.current.update()}
          >
            <Plant />
          </PivotControls>
        </mesh>

        <mesh onClick={togglePictureController}>
          <PivotControls
            ref={csgPicture}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scalePicture}
            anchor={[0, 0, 0]}
            onDrag={() => csgPicture.current.update && csgPicture.current.update()}
          >
            <Picture />
          </PivotControls>
        </mesh>

        <mesh onClick={toggleDecorationController}>
          <PivotControls
            ref={csgDecoration}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scaleDecoration}
            anchor={[0, 0, 0]}
            onDrag={() => csgDecoration.current.update && csgDecoration.current.update()}
          >
            <Decoration />
          </PivotControls>
        </mesh>

        <mesh onClick={toggleDoorController}>
          <PivotControls
            ref={csgDoor}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scaleDoor}
            anchor={[0, 0, 0]}
            onDrag={() => csgDoor.current.update && csgDoor.current.update()}
          >
            <Door />
          </PivotControls>
        </mesh>

        <mesh onClick={toggleBookCaseController}>
          <PivotControls
            ref={csgBookCase}
            rotation={rotation}
            activeAxes={[true, false, true]}
            scale={scaleBookCase}
            anchor={[0, 0, 0]}
            onDrag={() => csgBookCase.current.update && csgBookCase.current.update()}
          >
            <BookCase />
          </PivotControls>
        </mesh>

      <mesh>
        <Room /> {/* Without PivotControls */}
      </mesh>
      <ambientLight castShadow intensity={1} color="white" />
      <pointLight castShadow color="white" intensity={50} position={[0, 3, 2]} />
    </mesh>
    </PerspectiveCamera>
  );
}
