/** @format */

import React from "react";
import { Circle, Layer, Stage, Animation } from "react-konva";

const KonvaParticleCanvas = () => {
  const particlesArray = React.useRef([]);

  class Particle {
    // constructor() {
    //   this.x = Math.random() * window.innerWidth;
    //   this.y = Math.random() * window.innerHeight;
    //   this.size = Math.random() * 5;
    //   this.speedX = Math.random() * 3 - 1.5;
    //   this.speedY = Math.random() * 3 - 1.5;
    //   this.color = colorDot[Math.floor(Math.random() * colorDot.length)];
    // }
    // update() {
    //   if (this.y < 0 || this.y > canvasRef.current.height) {
    //     this.speedY = -this.speedY;
    //   } else if (this.x < 0 || this.x > canvasRef.current.width) {
    //     this.speedX = -this.speedX;
    //   }
    //   this.x += this.speedX;
    //   this.y += this.speedY;
    // }
    // mouseLinks() {
    //   if (!ctx.current) return;
    //   for (let i = 0; i < particlesArray.current.length; i++) {
    //     for (let j = 0; j < particlesArray.current.length; j++) {
    //       const dx = particlesArray.current[i].x - particlesArray.current[j].x;
    //       const dy = particlesArray.current[i].y - particlesArray.current[j].y;
    //       if (
    //         dx < dots.distance &&
    //         dy < dots.distance &&
    //         dx > -dots.distance &&
    //         dy > -dots.distance
    //       ) {
    //         if (
    //           particlesArray.current[i].x - particlesArray.current[0].x <
    //             dots.d_radius &&
    //           particlesArray.current[i].y - particlesArray.current[0].y <
    //             dots.d_radius &&
    //           particlesArray.current[i].x - particlesArray.current[0].x >
    //             -dots.d_radius &&
    //           particlesArray.current[i].y - particlesArray.current[0].y >
    //             -dots.d_radius
    //         ) {
    //           let dotDistance =
    //             ((particlesArray.current[i].x - particlesArray.current[0].x) **
    //               2 +
    //               (particlesArray.current[i].y - particlesArray.current[0].y) **
    //                 2) **
    //             0.25;
    //           let distanceRatio = dotDistance / dots.d_radius;
    //           distanceRatio -= 0.0001;
    //           if (distanceRatio < 0) {
    //             distanceRatio = 0;
    //           }
    //           // console.log(distanceRatio);
    //           // ctx.current.strokeStyle = "red";
    //           // ctx.current.strokeStyle = "rgb(81, 162, 233, 0.01)";
    //           ctx.current.strokeStyle = `rgb(81, 162, 233, ${
    //             0.05 - distanceRatio
    //           })`;
    //           ctx.current.beginPath();
    //           ctx.current.moveTo(
    //             particlesArray.current[i].x,
    //             particlesArray.current[i].y
    //           );
    //           ctx.current.lineTo(
    //             particlesArray.current[j].x,
    //             particlesArray.current[j].y
    //           );
    //           ctx.current.stroke();
    //           ctx.current.closePath();
    //         }
    //       }
    //     }
    //   }
    // }
    // draw() {
    //   if (!ctx.current) return;
    //   // ctx.current.fillStyle = "white";
    //   const dotDistance =
    //     ((this.x - particlesArray.current[0].x) ** 2 +
    //       (this.y - particlesArray.current[0].y) ** 2) **
    //     0.5;
    //   const distanceRatio = dotDistance / (window.innerWidth / 3);
    //   // slice removes brackets from rgb color and adds opacity
    //   ctx.current.fillStyle = this.color.slice(0, -1) + `,${1 - distanceRatio}`;
    //   ctx.current.beginPath();
    //   ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    //   ctx.current.closePath();
    //   ctx.current.fill();
    // }
  }

  for (let i = 0; i < 20; i++) {
    particlesArray.current.push(new Particle());
  }

  return (
    <div>
      <h1>KONVA</h1>
    </div>
  );
};

export default KonvaParticleCanvas;
