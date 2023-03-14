/** @format */

import React from "react";

const ParticleCanvas = () => {
  const canvas = React.useRef();
  const ctx = React.useRef();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    canvas = document.getElementById("canvas1");
    ctx = canvas.current.getContext("2d");
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div>
      <canvas id="canvas1"></canvas>
    </div>
  );
};

export default ParticleCanvas;

// function drawCircle() {
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(100, 100, 50, 0, Math.PI * 2);
//   ctx.fill();
// }
//
// React.useEffect(() => {
//   setCanvas(document.getElementById("canvas1"));
//   setCtx(canvas.getContext("2d"));
//   canvas.width = windowWidth;
//   canvas.height = windowHeight;
// });

// React.useEffect(() => {
//   const canvas = document.getElementById("canvas1");
//   const ctx = canvas.getContext("2d");
//   function watchResize() {
//     setWindowWidth(window.innerWidth);
//     setWindowHeight(window.innerHeight);
//   }

//   window.addEventListener("resize", watchResize);
//   window.addEventListener("click", function (event) {
//     setMouse({ x: event.x, y: event.y });
//   });

//   canvas.width = windowWidth;
//   canvas.height = windowHeight;

//   return function () {
//     window.removeEventListener("resize", watchResize);
//     window.removeEventListener("click", function (event) {
//       setMouse({ x: event.x, y: event.y });
//     });
//   };
// }, []);
