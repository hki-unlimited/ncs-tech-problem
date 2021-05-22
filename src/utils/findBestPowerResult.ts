import PowerToLinkStationResult from "../models/PowerToLinkStationResult";

/**
 * A function for finding the best power results. Returns the result with most power to link station.
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
