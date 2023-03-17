/** @format */

import React from "react";
import { useHeroCanvasFFContext } from "../hooks/useHeroCanvasFFContext";

const HeroCanvasFF = (props) => {
  const { canvasRef, ctx, canvasParticles } = useHeroCanvasFFContext();

  React.useEffect(() => {
    canvasParticles();
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
    ctx.current.lineWidth = 0.3;
    ctx.current.strokeColor = `rgb(81, 162, 233)`;
  }, [canvasRef, ctx]);

  return (
    <div>
      <canvas
        {...props}
        ref={canvasRef}
        width={document.body.scrollWidth}
        height={window.innerHeight}
        // onMouseMove={handleAura}
      >
        <div className="box"></div>
      </canvas>
    </div>
  );
};

export default HeroCanvasFF;
