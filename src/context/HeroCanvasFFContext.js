/** @format */

import React from "react";

export const HeroCanvasFFContext = React.createContext();

export const HeroCanvasFFProvider = ({ children }) => {
  const canvasRef = React.useRef();
  const ctx = React.useRef(null);
  const colorDot = [
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(81, 162, 233)",
    "rgb(255, 77, 90)",
  ];

  const Particles = React.useRef({
    NUMDOTS: 100,
    distance: 60,
    d_radius: 280,
    array: [],
  });

  const canvasParticles = () => {
    function Particle() {
      this.x = window.innerWidth * Math.random();
      this.y = window.innerHeight * Math.random();
      this.vX = -0.5 + Math.random();
      this.vY = -0.5 + Math.random();
      this.radius = 15 * Math.random();
      this.color = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Particle.prototype = {
      create: function () {
        if (!ctx.current) return;
        const dotDistance =
          ((this.x - Particles.current.array[0].x) ** 2 +
            (this.y - Particles.current.array[0].y) ** 2) **
          0.5;
        const distanceRatio = dotDistance / (window.innerWidth / 3);

        // slice removes brackets from rgb color and adds opacity
        ctx.current.fillStyle =
          this.color.slice(0, -1) + `,${1 - distanceRatio}`;
        ctx.current.beginPath();
        ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.current.closePath();
        ctx.current.fill();
      },
      animate: function () {
        for (let i = 1; i < Particles.current.NUMDOTS; i++) {
          if (
            Particles.current.array[i].y < 0 ||
            Particles.current.array[i].y > canvasRef.current.height
          ) {
            Particles.current.array[i].vY = -Particles.current.array[i].vY;
          } else if (
            Particles.current.array[i].x < 0 ||
            Particles.current.array[i].x > canvasRef.current.width
          ) {
            Particles.current.array[i].vX = -Particles.current.array[i].vX;
          }
          Particles.current.array[i].x += Particles.current.array[i].vX;
          Particles.current.array[i].y += Particles.current.array[i].vY;
        }
      },
      line: function () {
        if (!ctx.current) return;

        for (let i = 0; i < Particles.current.NUMDOTS; i++) {
          for (let j = 0; j < Particles.current.NUMDOTS; j++) {
            const dx =
              Particles.current.array[i].x - Particles.current.array[j].x;
            const dy =
              Particles.current.array[i].y - Particles.current.array[j].y;

            if (
              dx < Particles.current.distance &&
              dy < Particles.current.distance &&
              dx > -Particles.current.distance &&
              dy > -Particles.current.distance
            ) {
              if (
                Particles.current.array[i].x - Particles.current.array[0].x <
                  Particles.current.d_radius &&
                Particles.current.array[i].y - Particles.current.array[0].y <
                  Particles.current.d_radius &&
                Particles.current.array[i].x - Particles.current.array[0].x >
                  -Particles.current.d_radius &&
                Particles.current.array[i].y - Particles.current.array[0].y >
                  -Particles.current.d_radius
              ) {
                let dotDistance =
                  ((Particles.current.array[i].x -
                    Particles.current.array[0].x) **
                    2 +
                    (Particles.current.array[i].y -
                      Particles.current.array[0].y) **
                      2) **
                  0.25;
                let distanceRatio = dotDistance / Particles.current.d_radius;
                distanceRatio -= 0.0001;
                if (distanceRatio < 0) {
                  distanceRatio = 0;
                }

                ctx.current.strokeStyle = `rgb(81, 162, 233, ${
                  0.05 - distanceRatio
                })`;
                ctx.current.beginPath();
                ctx.current.moveTo(
                  Particles.current.array[i].x,
                  Particles.current.array[i].y
                );
                ctx.current.lineTo(
                  Particles.current.array[j].x,
                  Particles.current.array[j].y
                );

                ctx.current.stroke();
                ctx.current.closePath();
              }
            }
          }
        }
      },
    };

    const createParticles = () => {
      if (!ctx.current || !canvasRef.current) return;
      ctx.current.fillStyle = "rgba(50, 50, 50, .01";
      ctx.current.fillRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      for (let i = 0; i < Particles.current.NUMDOTS; i++) {
        if (Particles.current.array.length < Particles.current.NUMDOTS) {
          Particles.current.array.push(new Particle());
        }
        Particles.current.array[i].create();
      }
      Particles.current.array[0].animate();
      Particles.current.array[0].line();
      console.log("firing");
    };

    return createParticles;
    // setInterval(createParticle, 1000 / 30);
  };

  return (
    <HeroCanvasFFContext.Provider
      value={{
        canvasRef,
        ctx,
        Particles,
        canvasParticles,
      }}
    >
      {children}
    </HeroCanvasFFContext.Provider>
  );
};
