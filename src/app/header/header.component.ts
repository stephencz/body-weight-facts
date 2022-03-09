import { Component, Input, OnInit } from '@angular/core';
import { DynamicColor } from '../types/dynamic-color';
import { UserData } from '../types/user-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends DynamicColor{

  @Input() userData: UserData;
  @Input() brand: string;


}
