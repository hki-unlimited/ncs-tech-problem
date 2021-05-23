import powerToLinkStation from "../../utils/powerToLinkStation";

test("Power is 0 when out of reach", () => {
    let powerStationReach: number = 2;
    let distanceToPowerStation: number = 3;
    let power = powerToLinkStation(powerStationReach, distanceToPowerStation);
    expect(power).toBe(0);
});

test("Power to link station is calculated correctly", () => {
    let powerStationReach: number = 4;
    let distanceToPowerStation: number = 3;
    let power = powerToLinkStation(powerStationReach, distanceToPowerStation);
    expect(power).toBe(1);

    powerStationReach = 4;
    distanceToPowerStation = 2;
    power = powerToLinkStation(powerStationReach, distanceToPowerStation);
    expect(power).toBe(4);

    powerStationReach = 4;
    distanceToPowerStation = 1;
    power = powerToLinkStation(powerStationReach, distanceToPowerStation);
    expect(power).toBe(9);
});