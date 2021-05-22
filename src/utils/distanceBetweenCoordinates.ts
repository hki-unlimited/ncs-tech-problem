import Coordinate from "../models/Coordinate";

/** A function for calculating the distance between two coordinates in two-dimensional space.
 *  This is basic Pythagorean theorem trigonometry.
 *  Another option would be to write this yourself, which would result in better performance over Math.hypot
 */
export default function distanceBetweenCoordinates(
  start: Coordinate,
  end: Coordinate
): number {
  return Math.hypot(end.x - start.x, end.y - start.y);
}
