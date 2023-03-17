/** @format */

import { HeroCanvasFFContext } from "../context/HeroCanvasFFContext";
import { useContext } from "react";

export const useHeroCanvasFFContext = () => {
  const context = useContext(HeroCanvasFFContext);
  if (!context) return;
  return context;
};
