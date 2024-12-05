"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/3d/cake.glb");

  // Load all textures
  const textures = [
    {
      color: useTexture("/3d/textures/model_0_color.png"),
      metallic: useTexture("/3d/textures/model_0_metallic.png"),
      roughness: useTexture("/3d/textures/model_0_roughness.png"),
      transmittance: useTexture("/3d/textures/model_0_transmittance.png"),
    },
    {
      color: useTexture("/3d/textures/model_1_color.png"),
      metallic: useTexture("/3d/textures/model_1_metallic.png"),
      roughness: useTexture("/3d/textures/model_1_roughness.png"),
      transmittance: useTexture("/3d/textures/model_1_transmittance.png"),
    },
    {
      color: useTexture("/3d/textures/model_2_color.png"),
      metallic: useTexture("/3d/textures/model_2_metallic.png"),
      roughness: useTexture("/3d/textures/model_2_roughness.png"),
      transmittance: useTexture("/3d/textures/model_2_transmittance.png"),
    },
    {
      color: useTexture("/3d/textures/model_3_color.png"),
      metallic: useTexture("/3d/textures/model_3_metallic.png"),
      roughness: useTexture("/3d/textures/model_3_roughness.png"),
      transmittance: useTexture("/3d/textures/model_3_transmittance.png"),
    },
    {
      color: useTexture("/3d/textures/model_4_color.png"),
      metallic: useTexture("/3d/textures/model_4_metallic.png"),
      roughness: useTexture("/3d/textures/model_4_roughness.png"),
      transmittance: useTexture("/3d/textures/model_4_transmittance.png"),
    },
    {
      color: useTexture("/3d/textures/model_5_color.png"),
      metallic: useTexture("/3d/textures/model_5_metallic.png"),
      roughness: useTexture("/3d/textures/model_5_roughness.png"),
      transmittance: useTexture("/3d/textures/model_5_transmittance.png"),
    },
  ];

  // Apply textures to the model's meshes
  scene.traverse((child, index) => {
    if (child.isMesh && index < textures.length) {
      const texture = textures[index];
      child.material.map = texture.color;
      child.material.metalnessMap = texture.metallic;
      child.material.roughnessMap = texture.roughness;
      child.material.alphaMap = texture.transmittance;
      child.material.transparent = true;
      child.material.needsUpdate = true;
    }
  });

  // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

const SpinningIcon = () => {
  return (
    <Canvas
      style={{ width: 300, height: 300 }}
      camera={{ position: [1000, 600, 30], fov: 50 }} // Adjust camera position and field of view
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
    </Canvas>
  );
};

export default SpinningIcon;
