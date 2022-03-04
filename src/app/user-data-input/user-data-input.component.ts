import { Component, Output, EventEmitter} from '@angular/core';

import { UserData } from '../types/user-data';
import { UserDataErrorInfo } from '../types/user-data-error-info';

@Component({
  selector: 'app-user-data-input',
  templateUrl: './user-data-input.component.html',
  styleUrls: ['./user-data-input.component.scss']
})
export class UserDataInputComponent {

  @Output() userDataUpdatedEvent = new EventEmitter<UserData>();
  
  userDataErrorInfo: UserDataErrorInfo = {
    ageHasError: false,
    heightHasError: false,
    weightHasError: false
  }

  userData: UserData = {
    age: null,
    height: null,
    weight: null,
    sex: null,
    isMetric: false,
  };

  handleUserAgeUpdate(event: any) {

    if(!isNaN(event.target.value)) {
      this.userDataErrorInfo.ageHasError = false;
      this.userData.age = event.target.value;
    
    } else {
      this.userDataErrorInfo.ageHasError = true;
    }

    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserHeightUpdate(event: any) {
    if(!isNaN(event.target.value)) {
      this.userDataErrorInfo.heightHasError = false;
      this.userData.height = event.target.value;
    
    } else {
      this.userDataErrorInfo.heightHasError = true;
    }

    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserWeightUpdate(event: any) {
    if(!isNaN(event.target.value)) {
      this.userDataErrorInfo.weightHasError = false;
      this.userData.weight = event.target.value;
    
    } else {
      this.userDataErrorInfo.weightHasError = true;
    }

    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserMetricUpdate() {
    
    this.userData.isMetric = !this.userData.isMetric;
    
    this.userData.height = null;
    this.userData.weight = null;

    this.userDataUpdatedEvent.emit(this.userData);
  }

}
