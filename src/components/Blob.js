/** @format */

import React from "react";

const Blob = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
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

  // console.log(mousePosition);

  return (
    <>
      <div
        className="blob"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
      <div className="blob--blur"></div>
    </>
  );
};

export default Blob;
