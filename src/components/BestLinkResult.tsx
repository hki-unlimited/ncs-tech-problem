import React from 'react';
import PowerToLinkStationResult from '../models/PowerToLinkStationResult';

interface Props {
  result: PowerToLinkStationResult;
}

const BestLinkResult: React.FC<Props> = ({ result }) => {
  return <div> {`Best link station for point ${result.pointX}, ${result.pointY} is ${result.stationX}, ${result.stationY} with power ${result.powerToLinkStation.toFixed(2)}`}</div>;
};

export default BestLinkResult;
