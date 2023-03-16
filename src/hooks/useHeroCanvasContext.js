/** @format */

import { HeroCanvasContext } from "../context/HeroCanvasContext";
import { useContext } from "react";

export const useHeroCanvasContext = () => {
  const context = useContext(HeroCanvasContext);
  if (!context) return;
  return context;
};
