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
    isMetric: false,
  };

  updateUserData(newUserData: UserData) {
    this.userData = newUserData;
    console.log("PARENT: " + this.userData.age);
  }
}
