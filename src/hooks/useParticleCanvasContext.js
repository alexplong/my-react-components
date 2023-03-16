/** @format */

import { ParticleCanvasContext } from "../context/ParticleCanvasContext";
import { useContext } from "react";

export const useParticleCanvasContext = () => {
  const context = useContext(ParticleCanvasContext);
  if (!context) return;
  return context;
};
