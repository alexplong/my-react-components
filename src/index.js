/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ParticleCanvasProvider } from "./context/ParticleCanvasContext";
// import { HeroCanvasProvider } from "./context/HeroCanvasContext";
import { HeroCanvasFFProvider } from "./context/HeroCanvasFFContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeroCanvasFFProvider>
      <App />
    </HeroCanvasFFProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
