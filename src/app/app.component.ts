import { Component } from '@angular/core';
import { UserData } from './types/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Body Weight Facts';

  userData: UserData = {
    age: null,
    height: null,
    weight: null,
    sex: null,

    bmi: null,
    bmiRange: null,
    bmr: null,
  
    tdeeSedentary: null,
    tdeeLight: null,
    tdeeModerate: null,
    tdeeHeavy: null,
    tdeeAthlete: null,
  
    macroCarb: null,
    macroFat: null,
    macroProtein: null,

    isMetric: false,
  };

  updateUserData(newUserData: UserData) : void {
    this.userData = newUserData;
  }

  /**
   * Calculates and returns the Body Mass Index of the user.
   * @param userData UserData object
   * @returns BMI
   */
  calculateBodyMassIndex(userData: UserData) : number {
    if(userData.sex === "Male") {
      return 0;
    } else {
      return 0;
    }
  }

 
}
