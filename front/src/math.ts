import { cx0, r0, cy0 } from "./constant";
import { Point } from "./interfaces/Point";

/**
 * get the angle in radians
 *
 * @param {number} index
 * @param {number} samples
 * @return {*}  {number} the angle in radians
 */
export const getAngle = (index: number, samples: number): number => {
  return (index * 2 * Math.PI) / samples - Math.PI / 2;
};

export const getPointOnCircle = (angle: number): Point => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};
