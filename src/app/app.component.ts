import { Component } from '@angular/core';
import { UserData } from './types/user-data';
import {
  calculateBodyMassIndex,
  calculateBMIRange,
  calculateBMR,
  calculateTDEE
} from './lib/health';

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

    weightMetric: null,
    heightMetric: null,

    bmi: null,
    bmiRange: null,
    bmr: null,
  
    tdeeSedentary: null,
    tdeeLight: null,
    tdeeModerate: null,
    tdeeHeavy: null,
    tdeeAthlete: null,
  
    isMetric: false,
  };

  updateUserData(newUserData: UserData) : void {
    this.userData = newUserData;
    
    this.userData.bmi = calculateBodyMassIndex(this.userData);
    this.userData.bmiRange = calculateBMIRange(this.userData);

    this.userData.bmr = calculateBMR(this.userData);

    this.userData.tdeeSedentary = calculateTDEE(this.userData, 1.2);
    this.userData.tdeeLight = calculateTDEE(this.userData, 1.375);
    this.userData.tdeeModerate = calculateTDEE(this.userData, 1.55);
    this.userData.tdeeHeavy = calculateTDEE(this.userData, 1.725);
    this.userData.tdeeAthlete = calculateTDEE(this.userData, 1.9);

  }

}
