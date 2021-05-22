import distanceBetweenCoordinates from "../../utils/distanceBetweenCoordinates";
import Coordinate from "../../models/Coordinate";

test("Distance between coordinates is calculated correctly", () => {
    let start: Coordinate = { x: 0, y: 0 };
    let end: Coordinate = { x: 1, y: 1 }
    let distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(Math.sqrt(2));

    start = { x: 1, y: 1 };
    end = { x: 0, y: 0 };
    distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(Math.sqrt(2));
    
    start = { x: 0, y: 0 };
    end = { x: -1, y: -1 };
    distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(Math.sqrt(2));

    start = { x: -1, y: -1 };
    end = { x: 0, y: 0 };
    distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(Math.sqrt(2));

    start = { x: 2, y: 2 };
    end = { x: 6, y: 5 };
    distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(5);

    start = { x: -2, y: -2 };
    end = { x: -6, y: -5 };
    distance = distanceBetweenCoordinates(start, end)
    expect(distance).toBe(5);

});

