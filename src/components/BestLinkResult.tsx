import React from 'react';
import PowerToLinkStationResult from '../models/PowerToLinkStationResult';

interface Props {
  result: PowerToLinkStationResult;
}

/** 
 * A component shows info for the best link station, as calculated from power at a given coordinates.  
 * This component is only shown when a device with given coordinates has a station within reach
*/
const BestLinkResult: React.FC<Props> = ({ result }) => {
  return <div> {`Best link station for point ${result.pointX}, ${result.pointY} is ${result.stationX}, ${result.stationY} with power ${result.powerToLinkStation.toFixed(2)}`}</div>;
};

export default BestLinkResult;
