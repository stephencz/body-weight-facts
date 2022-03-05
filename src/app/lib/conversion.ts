/**
 * Converts a length in inches to a length in meters.
 * @param inches A length in inches
 * @returns The equivalent length in meters.
 */
function convertInchesToMeters(inches: number) : number {
  return inches / 39.37;
}

/**
 * Converts a weight in lbs to a weight in kilograms.
 * @param lbs A weight in lbs.
 * @returns A weight in kilograms.
 */
function convertLbsToKgs(lbs: number) : number {
  return lbs / 2.205;
}

export {
  convertInchesToMeters,
  convertLbsToKgs 
}