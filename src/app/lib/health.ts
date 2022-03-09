import { UserData } from "../types/user-data";

/**
 * Calculates and returns the Body Mass Index of the user.
 * @param {UserData} userData - the user data object.
 * @returns BMI. Null if user hasn't entered weight and height.
 */
function calculateBodyMassIndex(userData: UserData) : number | null {
  if(userData.weightMetric !== null && userData.heightMetric !== null) {
      return userData.weightMetric / (userData.heightMetric * userData.heightMetric);
  }
  
  return null;
}

/**
 * Determines if the user's BMI should be classified as underweight,
 * healthy, overweight, or obese.
 * @param {UserData} userData - the user data object.
 * @returns String. Null if user hasn't entered weight and height.
 */
function calculateBMIRange(userData: UserData) : string | null {
  if(userData.bmi !== null) {
    if(userData.bmi < 18.5) {
      return "Underweight";
    } 

    if(userData.bmi >= 18.5 && userData.bmi < 25.0) {
      return "Healthy";
    }

    if(userData.bmi >= 25.0 && userData.bmi < 30.0) {
      return "Overweight";
    }

    if(userData.bmi >= 30.0) {
      return "Obese";
    }
  }

  return null;
}

/**
 * Calculates the User's Basal Metabolic Rate.
 * @param {UserData} userData - The user data object.
 * @returns Number. Null if age, weight, height, or sex is missing.
 */
function calculateBMR(userData: UserData) : number | null {
  if(userData.bmi !== null) {
    if (userData.sex !== null) {
      if(userData.sex === "Male") {
        if(userData.heightMetric !== null && userData.weightMetric !== null && userData.age != null) {
          return (88.362) + (13.397 * userData.weightMetric) + (4.799 * (userData.heightMetric * 100)) - (5.677 * userData.age);
        }

      } else {
        if(userData.heightMetric !== null && userData.weightMetric !== null && userData.age != null) {
          return (447.593) + (9.247 * userData.weightMetric) + (3.098 * (userData.heightMetric * 100)) - (4.330 * userData.age);
        }
      }
    }
  }

  return null;
}

/**
 * Calculates the user's Total Daily Energy Expenditure (TDEE) at the given modifier.
 * @param {UserData} userData - The UserData object.
 * @param {number} modifier - the amount to multiple the BMR by. Higher means more active. 
 * @return Number, or null when BMR is null. 
 */
function calculateTDEE(userData: UserData, modifer: number) : number | null {
  if(userData.bmr !== null) {
    return userData.bmr * modifer;
  } 

  return null;
}
export {
  
  calculateBodyMassIndex,
  calculateBMIRange,
  calculateBMR,
  calculateTDEE,

};