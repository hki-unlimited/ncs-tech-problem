/**
 * A function for calculating power to a link station.
 * If distance is greater than or equal to reach, power is zero.
 * As a device moves closer to the station from the outer rim of the
 * station's reach, power will increase in the square to the distance from the rim towards the station.
 */
export default function powerToLinkStation(
  powerStationReach: number,
  distanceToPowerStation: number
): number {
  let power: number = 0;

  if (distanceToPowerStation < powerStationReach) {
    power = Math.pow(powerStationReach - distanceToPowerStation, 2);
  }
  return power;
}
