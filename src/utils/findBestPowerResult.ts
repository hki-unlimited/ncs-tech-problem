import PowerToLinkStationResult from "../models/PowerToLinkStationResult";

/**
 */
export default function findBestPowerResult(
  results: PowerToLinkStationResult[]
): PowerToLinkStationResult {
  const sortedResults: PowerToLinkStationResult[] =
  results.sort((a, b) =>
    a.powerToLinkStation < b.powerToLinkStation ? 1 : -1
  );
  return sortedResults[0];
}
