import React, { useEffect, useState } from "react";
import Coordinate from "../models/Coordinate";
import LinkStation from "../models/LinkStation";
import PowerToLinkStationResult from "../models/PowerToLinkStationResult";
import sampleLinkStations from "../sampleData/linkStations";
import samplePoints from "../sampleData/points";
import findBestPowerResult from "../utils/findBestPowerResult";
import powerToLinkStationResult from "../utils/powerToLinkStationResult";
import BestLinkResult from "./BestLinkResult";
import NoStationWithinReach from "./NoStationWithinReach";

const SampleSolution: React.FC = () => {
  const [bestPowerResults, setBestPowerResults] = useState<
    PowerToLinkStationResult[]
  >([]);
  useEffect(() => {
    // Loop through sample data, find the best station for each point
    // If there is no station within reach show a no stations within reach placeholder
    // This is where I would normally get data via an API file, then either set it to local state
    // or use a Mobx setter and context API or dispatch and action in Redux and fetch the result with a selector 
    // depending on the stack
    const bestPowerResults: PowerToLinkStationResult[] = [];
    // Loop trough each sample coordinate point
    samplePoints.forEach((point: Coordinate) => {
      const powerToLinkStationResults: PowerToLinkStationResult[] = [];
      // Calculate power results against each station
      sampleLinkStations.forEach((station: LinkStation) => {
        powerToLinkStationResults.push(
          powerToLinkStationResult(point, station)
        );
      });
      // Find the best result and push
      bestPowerResults.push(findBestPowerResult(powerToLinkStationResults));
    });
    setBestPowerResults(bestPowerResults);
  }, []);
  return (
    <div>
      <h2>NCS tech problem, sample output</h2>
      {bestPowerResults.map(
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

export default SampleSolution;
