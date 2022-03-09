
import { UserData } from "./user-data";

export class DynamicColor {

  getColorClass(userData: UserData) : string {
    if(userData.bmiRange !== null) {
      if(userData.bmiRange === "Underweight") {
        return "underweight";
      }
  
      if(userData.bmiRange === "Healthy") {
        return "healthy";
      }
  
      if(userData.bmiRange === "Overweight") {
        return "overweight";
      }
  
      if(userData.bmiRange === "Obese") {
        return "obese";
      }
    }
  
    return "unknown";
  }

}