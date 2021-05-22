import Coordinate from "../models/Coordinate";
import LinkStation from "../models/LinkStation";
import distanceBetweenCoordinates from "./distanceBetweenCoordinates";
import powerToLinkStation from "./powerToLinkStation";
import PowerToLinkStationResult from "../models/PowerToLinkStationResult";

export default function powerToLinkStationResult(
  point: Coordinate,
  station: LinkStation
): PowerToLinkStationResult {
  const stationCoordinates: Coordinate = { x: station.x, y: station.y };
  return {
    pointX: point.x,
    pointY: point.y,
    stationX: station.x,
    stationY: station.y,
    powerToLinkStation: powerToLinkStation(station.reach, distanceBetweenCoordinates(point, stationCoordinates))
  }
}

