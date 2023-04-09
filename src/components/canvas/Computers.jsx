import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";

import CanvasLoader from "../Loader";


const BoxCanvas = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const boxSize = width < 768 ? 1 : 2;
  const textSize = width < 768 ? 0.25 : 0.5;

  return (
    <>
      <Canvas>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intesity={1} />
          <directionalLight position={[3, 2, 1]} />
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[boxSize, boxSize, boxSize]} />
          <meshStandardMaterial 
            gradientMap=""
          >
            <RenderTexture attach="map">
              <PerspectiveCamera 
                makeDefault
                position={[0, 0, 1]}
              />
              <color attach="background" args={["#a120ac"]} />
              <Text fontSize={textSize} color="#555">
                Ahoj
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </>
  );
}

export default BoxCanvas;