
export interface UserData {
  age:            number | null;
  height:         number | null;
  weight:         number | null;
  weightMetric:   number | null;
  heightMetric:   number | null;
  sex:            string | null;

  bmi:            number | null;
  bmiRange:       string | null;

  bmr:            number | null;

  tdeeSedentary:  number | null;
  tdeeLight:      number | null;
  tdeeModerate:   number | null;
  tdeeHeavy:      number | null;
  tdeeAthlete:    number | null;

  isMetric:       boolean;
}