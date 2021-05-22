
export default function powerToLinkStation(
  powerStationReach: number,
  distanceToPowerStation: number
): number {
  let power: number = 0;

  if (distanceToPowerStation < powerStationReach) {
    power = Math.pow(powerStationReach - distanceToPowerStation, 2)
  }
  return power;
}

