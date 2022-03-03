import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user-data-input',
  templateUrl: './user-data-input.component.html',
  styleUrls: ['./user-data-input.component.scss']
})
export class UserDataInputComponent implements OnInit {

  userData: UserData = {
    age: null,
    height: null,
    weight: null,
    isMetric: false,
    isMale: false
  }

  constructor() { }

  ngOnInit(): void {



  }

}
