import {Component} from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //boolean for burger trigger
  isActive: boolean;
  constructor() {
    this.isActive = false;
  }

  burgerTrigger(){
    this.isActive =! this.isActive;
  }


}
