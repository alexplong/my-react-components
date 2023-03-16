/** @format */

import React from "react";
import { useHeroCanvasContext } from "../hooks/useHeroCanvasContext";

const HeroCanvas = () => {
  const {
    canvasRef,
    ctx,
    setMousePosition,
    particlesArray,
    animate,
    handleAura,
    handleResize,
  } = useHeroCanvasContext();

  // React.useEffect(() => {
  //   const handleSetMouse = (event) => {
  //     // console.log(event);
  //     setMousePosition({ x: event.pageX, y: event.pageY });
  //   };
  //   window.addEventListener("mousemove", handleSetMouse);
  //   return () => {
  //     window.removeEventListener("mousemove", handleSetMouse);
  //   };
  // }, []);

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
    animate();
  }, [particlesArray]);

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
      >
        <div className="box">
          <h1>HIT ME</h1>
        </div>
      </canvas>
    </div>
  );
};

export default HeroCanvas;
