import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';

export const FluidHero = ({ isDark = false }) => {
  return (
    <div className={`absolute inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-gradient-to-b from-[#ff6a1a] to-[#c73c00]'}`}>
      <ShaderGradientCanvas
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="on"
          bgColor1={isDark ? "#000000" : "#ff6a1a"}
          bgColor2={isDark ? "#000000" : "#c73c00"}
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={2.4}
          cPolarAngle={95}
          cameraZoom={1}
          color1="#ff6a1a"
          color2={isDark ? "#c73c00" : "#c73c00"}
          color3={isDark ? "#FD4912" : "#FD4912"}
          destination="onCanvas"
          embedMode="off"
          envPreset={isDark ? "city" : "studio"}
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={-2.1}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={225}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.8}
          uFrequency={5.5}
          uSpeed={0.2}
          uStrength={5.5}
          uTime={0.2}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};
