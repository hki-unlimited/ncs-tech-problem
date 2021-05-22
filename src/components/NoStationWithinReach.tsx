import React from "react";
import PowerToLinkStationResult from "../models/PowerToLinkStationResult";

interface Props {
  result: PowerToLinkStationResult;
}

/** 
 * A placeholder to show when there is no station within reach for the given coordinates
*/
const NoStationWithinReach: React.FC<Props> = ({ result }) => {
  return (
    <div className="no-link-station-within-reach-placeholder">
      {`No link station within reach for point ${result.pointX}, ${result.pointY}`}
    </div>
  );
};

export default NoStationWithinReach;
