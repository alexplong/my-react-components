/** @format */

import React from "react";
import { useParticleCanvasContext } from "../hooks/useParticleCanvasContext";

const ParticleCanvas = () => {
  const {
    canvasRef,
    ctx,
    handleParticleBurst,
    handleMouseMove,
    animate,
    particlesArray,
  } = useParticleCanvasContext();

  // React.useEffect(() => {
  //   requestAnimationFrame(animate);
  // }, []);

  // console.log(particlesArray);

  React.useEffect(() => {
    animate();
  }, [particlesArray]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
  }, [canvasRef]);

  // animate();
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleParticleBurst}
        onMouseMove={handleParticleBurst}
      ></canvas>
    </div>
  );
};

export default ParticleCanvas;
