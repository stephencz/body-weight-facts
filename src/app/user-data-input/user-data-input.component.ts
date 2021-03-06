import { Component, Input, Output, EventEmitter } from '@angular/core';

import { UserData } from '../types/user-data';
import { UserDataErrorInfo } from '../types/user-data-error-info';

import { 
  convertInchesToMeters, 
  convertLbsToKgs
} from '../lib/conversion';


@Component({
  selector: 'app-user-data-input',
  templateUrl: './user-data-input.component.html',
  styleUrls: ['./user-data-input.component.scss']
})

export class UserDataInputComponent {

  @Input() userData: UserData;
  @Output() userDataUpdatedEvent = new EventEmitter<UserData>();
  
  userDataErrorInfo: UserDataErrorInfo = {
    ageHasError: false,
    heightHasError: false,
    weightHasError: false
  }

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
      if(event.target.value < 0) {
        this.userData.height = 0;
        this.userData.height = 0;

      } else {

        this.userData.height = event.target.value;
        if(this.userData.isMetric) {
          this.userData.heightMetric = event.target.value;

        } else {
          this.userData.heightMetric = convertInchesToMeters(event.target.value);

        }
      }

      this.userDataErrorInfo.heightHasError = false;
    
    } else {
      this.userDataErrorInfo.heightHasError = true;
      
    }

    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserWeightUpdate(event: any) {
    if(!isNaN(event.target.value)) {
      if(event.target.value < 0) {
        this.userData.weight = 0;
        this.userData.weightMetric = 0;

      } else {
        
        this.userData.weight = event.target.value;

        if(this.userData.isMetric) {
          this.userData.weightMetric = event.target.value;
        
        } else {
          this.userData.weightMetric = convertLbsToKgs(event.target.value);

        }

      }

      this.userDataErrorInfo.weightHasError = false;
    
    } else {
      this.userDataErrorInfo.weightHasError = true;

    }

    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserSexUpdate(event: any) {
    this.userData.sex = event.target.value;
    this.userDataUpdatedEvent.emit(this.userData);
  }

  handleUserMetricUpdate() {
    
    this.userData.isMetric = !this.userData.isMetric;
    
    this.userData.height = null;
    this.userData.heightMetric = null;
    this.userData.weight = null;
    this.userData.weightMetric = null;

    this.userDataUpdatedEvent.emit(this.userData);
  }

}
