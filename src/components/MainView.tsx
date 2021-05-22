import React, { useEffect, useState } from "react";
import Coordinate from "../models/Coordinate";
import LinkStation from "../models/LinkStation";
import PowerToLinkStationResult from "../models/PowerToLinkStationResult";
import linkStations from "../sampleData/linkStations";
import points from "../sampleData/points";
import powerToLinkStationResult from "../utils/bestLinkForStation";

const MainView: React.FC = () => {
  const [bestLinkResults, setBestLinkResults] = useState<
    PowerToLinkStationResult[]
  >([]);
  useEffect(() => {
    const bestLinkResults: PowerToLinkStationResult[] = [];
    points.forEach((point: Coordinate) => {
      const powerToLinkStationResults: PowerToLinkStationResult[] = [];
      linkStations.forEach((station: LinkStation) => {
        powerToLinkStationResults.push(
          powerToLinkStationResult(point, station)
        );
      });
      const sortedResults: PowerToLinkStationResult[] =
        powerToLinkStationResults.sort((a, b) =>
          a.powerToLinkStation < b.powerToLinkStation ? 1 : -1
        );
      bestLinkResults.push(sortedResults[0]);
    });
    setBestLinkResults(bestLinkResults);
  }, []);
  return (
    <div>
      <h2>Sample output</h2>
      {bestLinkResults.map(
        (result: PowerToLinkStationResult, index: number) => {
          if (result.powerToLinkStation === 0) {
            return (
              <div>
                {`No link station within reach for point ${result.pointX}, ${result.pointY}`}

              </div>
            );
          }
          return (
            <div key={index}>
              {`Best link station for point ${result.pointX}, ${result.pointY} is ${result.stationX}, ${result.stationY} with power ${result.powerToLinkStation.toFixed(2)}`}
            </div>
          );
        }
      )}
    </div>
  );
};

export default MainView;
