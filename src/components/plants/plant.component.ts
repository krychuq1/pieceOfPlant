import {AfterViewInit, Component} from '@angular/core';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log("DOM fully loaded and parsed 2222");

  }
  counter:number;
  showEyes:boolean;
  isProcessing: boolean;
  images;
  constructor(){
    this.counter = 1;
    this.showEyes = false;
    this.isProcessing = true;
    this.images = [];
    setInterval(()=>{
      console.log('show eyes');
      this.showEyes =!this.showEyes;
    },2000);
    setInterval(()=>{
      this.increase();
    },5000);

  }
    loadedImage(nr){
    console.log('img loaded ', nr);
    this.images.push(nr);
    console.log('loading ', nr);

    if(this.images.length === 1 || this.images.length >1){
      this.isProcessing = false;
    }
  }
  increase(){
    this.isProcessing = true;
    if(this.counter === 4){
      this.counter = 1;
    }else{
      this.counter++;
    }
  }
  decrease(){
    this.isProcessing = true;

    if(this.counter === 1){
      this.counter = 4;
    }else{
      this.counter--;
    }
  }
}
