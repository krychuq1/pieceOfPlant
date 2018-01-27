import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  counter:number;
  showEyes:boolean;
  constructor(){
    this.counter = 1;
    this.showEyes = false;
    setInterval(()=>{
      console.log('show eyes');
      this.showEyes =!this.showEyes;
    },2000);

  }

  increase(){
    if(this.counter === 4){
      this.counter = 1;
    }else{
      this.counter++;
    }
  }
  decrease(){
    if(this.counter === 1){
      this.counter = 4;
    }else{
      this.counter--;
    }
  }
}
