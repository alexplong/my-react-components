/** @format */

import React from "react";
import { useHeroCanvasContext } from "../hooks/useHeroCanvasContext";

const HeroCanvas = () => {
  const {
    canvasRef,
    ctx,
    mousePosition,
    particlesArray,
    animate,
    handleAura,
    handleResize,
  } = useHeroCanvasContext();

  React.useEffect(() => {
    const setDimensions = () => {
      canvasRef.current.width = document.body.scrollWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", () => {
      setDimensions();
      handleResize();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setDimensions();
        handleResize();
      });
    };
  }, []);

  React.useEffect(() => {
    // animate();
    requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
    ctx.current.lineWidth = 0.3;
    ctx.current.strokeColor = `rgb(81, 162, 233)`;
  }, [canvasRef]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={document.body.scrollWidth}
        height={window.innerHeight}
        onMouseMove={handleAura}
        on
        // onMouseDown={handleAura}
      ></canvas>
    </div>
  );
};

export default HeroCanvas;
