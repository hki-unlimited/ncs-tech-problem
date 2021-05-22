import Coordinate from "../models/Coordinate"

export default function distanceBetweenCoordinates (start: Coordinate, end: Coordinate): number {
  return Math.hypot(end.x - start.x, end.y - start.y)
}