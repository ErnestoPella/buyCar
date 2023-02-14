import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../interfaces/status.interface';
import { Car } from '../../interfaces/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  button: string = 'menu';
  cars: Car[] = [];
  status: Status[] = [
    {
      icon: 'home',
      status: 150,
      title: 'branches'
    },
    {
      icon: 'groups',
      status: 590,
      title: 'happy clients'
    },
    {
      icon: 'directions_car_filled',
      status: 890,
      title: 'new cars'
    },
    {
      icon: 'car_rental',
      status: 4770,
      title: 'cars sold'
    }
  ];
  

  ngOnInit(): void {
    
    this.carService.getCars()
    .subscribe( cars => {
      this.cars = cars;
    });
  }
  
  constructor( private routes: Router,
               private carService: CarService){}



  changeButtonIcon(){
    if (this.button === 'menu'){
      this.button = 'close';
    }else{
      this.button = 'menu';
    }
  }

  login(){
    this.routes.navigate(['./auth/login'])
  }
}
