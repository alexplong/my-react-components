/** @format */

import React from "react";

export const HeroCanvasContext = React.createContext();

export const HeroCanvasProvider = ({ children }) => {
  const canvasRef = React.useRef();
  const ctx = React.useRef(null);
  const particlesArray = React.useRef(new Array());

  const [mousePosition, setMousePosition] = React.useState({
    x: undefined,
    y: undefined,
  });

  const [hue, setHue] = React.useState(0);

  class Particle {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 15 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `hsl(${hue}, 100%, 50%)`;

      this.weight = Math.random() * 5 + 1;
      this.directionX = -2;
    }

    update() {
      if (this.y > canvasRef.current.height) {
        this.y = 0 - this.size;
        this.weight = Math.random() * 5 + 1;
        this.x = Math.random() * canvasRef.current.width * 1.3;
      }
      this.weight += 0.15;
      this.y += this.weight;
      this.x += this.directionX;

      // check for collisions between particle and wall elements
    }

    draw() {
      if (!ctx.current) return;
      ctx.current.fillStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.current.beginPath();
      ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.current.closePath();
      ctx.current.fill();
    }
  }

  const initialize = () => {
    for (let i = 0; i < 15; i++) {
      particlesArray.current.push(new Particle());
    }
  };

  initialize();
  // const particle1 = new Particle();
  // const particle2 = new Particle();

  const handleAura = () => {};

  const handleParticles = () => {};

  const animate = () => {
    if (!ctx.current || !canvasRef.current) return;

    ctx.current.fillStyle = "rgba(255, 255, 255, 0.01";
    ctx.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    for (let i = 0; i < particlesArray.current.length; i++) {
      particlesArray.current[i].update();
      particlesArray.current[i].draw();
    }

    requestAnimationFrame(animate);
  };

  return (
    <HeroCanvasContext.Provider
      value={{ canvasRef, ctx, animate, particlesArray, handleAura }}
    >
      {children}
    </HeroCanvasContext.Provider>
  );
};
