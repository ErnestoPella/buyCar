import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car.interface';
import { CanLoad } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent{

  @Input() car!: Car;

  constructor( ){}


  customOptions: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 7,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  
}
