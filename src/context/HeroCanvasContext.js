/** @format */

import React, { ReactDOM } from "react";

export const HeroCanvasContext = React.createContext();

export const HeroCanvasProvider = ({ children }) => {
  const canvasRef = React.useRef();
  const elementRef = React.useRef(HTMLHeadingElement || null);
  const ctx = React.useRef(null);
  const particlesArray = React.useRef(new Array());

  const colorDot = [
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(255, 77, 90)",
  ]; // 80% of dots are blue. 20% pink

  const [mousePosition, setMousePosition] = React.useState({
    x: undefined,
    y: undefined,
  });

  const dots = {
    distance: 200,
    d_radius: 550,
  };

  class Particle {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 5;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    update() {
      if (this.y < 0 || this.y > canvasRef.current.height) {
        this.speedY = -this.speedY;
      } else if (this.x < 0 || this.x > canvasRef.current.width) {
        this.speedX = -this.speedX;
      }
      this.x += this.speedX;
      this.y += this.speedY;
    }

    mouseLinks() {
      if (!ctx.current) return;

      for (let i = 0; i < particlesArray.current.length; i++) {
        for (let j = 0; j < particlesArray.current.length; j++) {
          const dx = particlesArray.current[i].x - particlesArray.current[j].x;
          const dy = particlesArray.current[i].y - particlesArray.current[j].y;

          if (
            dx < dots.distance &&
            dy < dots.distance &&
            dx > -dots.distance &&
            dy > -dots.distance
          ) {
            if (
              particlesArray.current[i].x - particlesArray.current[0].x <
                dots.d_radius &&
              particlesArray.current[i].y - particlesArray.current[0].y <
                dots.d_radius &&
              particlesArray.current[i].x - particlesArray.current[0].x >
                -dots.d_radius &&
              particlesArray.current[i].y - particlesArray.current[0].y >
                -dots.d_radius
            ) {
              let dotDistance =
                ((particlesArray.current[i].x - particlesArray.current[0].x) **
                  2 +
                  (particlesArray.current[i].y - particlesArray.current[0].y) **
                    2) **
                0.25;
              let distanceRatio = dotDistance / dots.d_radius;
              distanceRatio -= 0.0001;
              if (distanceRatio < 0) {
                distanceRatio = 0;
              }
              // console.log(distanceRatio);

              // ctx.current.strokeStyle = "red";
              // ctx.current.strokeStyle = "rgb(81, 162, 233, 0.01)";
              ctx.current.strokeStyle = `rgb(81, 162, 233, ${
                0.05 - distanceRatio
              })`;
              ctx.current.beginPath();
              ctx.current.moveTo(
                particlesArray.current[i].x,
                particlesArray.current[i].y
              );
              ctx.current.lineTo(
                particlesArray.current[j].x,
                particlesArray.current[j].y
              );

              ctx.current.stroke();
              ctx.current.closePath();
            }
          }
        }
      }
    }

    draw() {
      if (!ctx.current) return;
      // ctx.current.fillStyle = "white";

      const dotDistance =
        ((this.x - particlesArray.current[0].x) ** 2 +
          (this.y - particlesArray.current[0].y) ** 2) **
        0.5;
      const distanceRatio = dotDistance / (window.innerWidth / 3);

      // slice removes brackets from rgb color and adds opacity
      ctx.current.fillStyle = this.color.slice(0, -1) + `,${1 - distanceRatio}`;
      ctx.current.beginPath();
      ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.current.closePath();
      ctx.current.fill();
    }
  }

  const initialize = () => {
    for (let i = 0; i < 100; i++) {
      particlesArray.current.push(new Particle());
    }

    // handleInterval();
  };

  const handleAura = (event) => {
    // console.log(event)
    if (!event) return;
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    try {
      particlesArray.current[0].x = mouseX;
      particlesArray.current[0].y = mouseY;
    } catch {
      console.log("oops");
    }
  };

  const handleParticles = () => {
    // start at index 1
    // index 0 dot moves with mouse
    for (let i = 1; i < particlesArray.current.length; i++) {
      particlesArray.current[i].update();
      particlesArray.current[i].draw();
    }
    handleMouseLinks();
  };

  const handleMouseLinks = () => {
    for (let i = 0; i < particlesArray.current.length; i++) {
      particlesArray.current[i].mouseLinks();
    }
  };

  const animate = () => {
    if (!ctx.current || !canvasRef.current) return;

    // ctx.current.fillStyle = "rgba(255, 255, 255, 0.1";
    ctx.current.fillStyle = "rgba(0, 0, 0, 1";

    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    handleParticles();
    // handleLinks();
    requestAnimationFrame(animate); //comment off for interval
  };

  // const handleInterval = () => {
  //   setInterval(animate, 1000 / 30);
  // };

  const handleResize = () => {
    particlesArray.current = [];
    initialize();
  };

  console.log(elementRef);

  initialize();

  return (
    <HeroCanvasContext.Provider
      value={{
        canvasRef,
        elementRef,
        ctx,
        setMousePosition,
        animate,
        particlesArray,
        handleAura,
        handleResize,
      }}
    >
      {children}
    </HeroCanvasContext.Provider>
  );
};
