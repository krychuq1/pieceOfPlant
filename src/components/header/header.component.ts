import {Component} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ]),
    ]),
    // Define animations here.

  ]
})
export class HeaderComponent {
  state: string = 'small';
  public ngxScrollToOffset: number;

  //boolean for burger trigger
  isActive: boolean;
  constructor() {
    this.isActive = false;

  }

  burgerTrigger(){
    this.isActive =! this.isActive;
  }

  test() {
    //console.log("test, test, test");
  }
}
