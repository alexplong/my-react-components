/** @format */

import React from "react";

export const ParticleCanvasContext = React.createContext();

export const ParticleCanvasProvider = ({ children }) => {
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
      // this.x = Math.random() * window.innerWidth;
      // this.y = Math.random() * window.innerHeight;
      this.x = mousePosition.x;
      this.y = mousePosition.y;
      this.size = Math.random() * 15 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `hsl(${hue}, 100%, 50%)`;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
      if (!ctx.current) return;
      // ctx.current.fillStyle = 'white';
      ctx.current.fillStyle = `hsl(${hue}, 100%, 50%)`;
      // ctx.current.fillStyle = this.color;
      ctx.current.beginPath();
      ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.current.closePath();
      ctx.current.fill();
    }
  }

  const handleParticleBurst = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });

    for (let i = 0; i < 12; i++) {
      particlesArray.current.push(new Particle());
    }
    console.log(particlesArray);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });

    // for (let i = 0; i < 10; i++) {
    //   particlesArray.current.push(new Particle());
    // }

    // requestAnimationFrame(animate);
  };

  const handleParticles = (event) => {
    for (let i = 0; i < particlesArray.current.length; i++) {
      particlesArray.current[i].update();
      particlesArray.current[i].draw();

      for (let j = i; j < particlesArray.current.length; j++) {
        const dx = particlesArray.current[i].x - particlesArray.current[j].x;
        const dy = particlesArray.current[i].y - particlesArray.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          ctx.current.beginPath();
          ctx.current.strokeStyle = particlesArray.current[i].color;
          ctx.current.lineWidth = 0.5;
          ctx.current.moveTo(
            particlesArray.current[i].x,
            particlesArray.current[i].y
          );
          ctx.current.lineTo(
            particlesArray.current[j].x,
            particlesArray.current[j].y
          );
          ctx.current.stroke();
        }
      }
      if (particlesArray.current[i].size <= 0.3) {
        particlesArray.current.splice(i, 1);
        i--;
      }
    }
  };

  const animate = () => {
    if (!ctx.current || !canvasRef.current) return;

    // turn off below to make frozen ice effect || on for fireworks effect
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    // draw semi transparent rectangle over canvas over and over
    // similar effect to fireworks above
    // ctx.current.fillStyle = "black";
    // ctx.current.fillStyle = `rgba(0,0,0,0.02)`;
    // ctx.current.fillRect(
    //   0,
    //   0,
    //   canvasRef.current.width,
    //   canvasRef.current.height
    // );

    handleParticles();
    setHue((prevState) => prevState + 0.5);
    requestAnimationFrame(animate);
  };

  return (
    <ParticleCanvasContext.Provider
      value={{
        canvasRef,
        ctx,
        particlesArray,
        handleParticleBurst,
        handleMouseMove,
        handleParticles,
        animate,
      }}
    >
      {children}
    </ParticleCanvasContext.Provider>
  );
};
