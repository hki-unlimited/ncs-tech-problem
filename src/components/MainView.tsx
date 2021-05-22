import React, { useEffect, useState } from "react";
import Coordinate from "../models/Coordinate";
import LinkStation from "../models/LinkStation";
import PowerToLinkStationResult from "../models/PowerToLinkStationResult";
import linkStations from "../sampleData/linkStations";
import points from "../sampleData/points";
import powerToLinkStationResult from "../utils/bestLinkForStation";
import BestLinkResult from "./BestLinkResult";
import NoStationWithinReach from "./NoStationWithinReach";

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
              <NoStationWithinReach result={result}/>
            );
          }
          return (
            <div key={index}>
             <BestLinkResult result={result}/>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MainView;
