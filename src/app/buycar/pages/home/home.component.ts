import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../interfaces/status.interface';
import { Car } from '../../interfaces/car.interface';
import { CarService } from '../../services/car.service';
import { Service } from '../../interfaces/service.interface';

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

  services: Service[] = [
    {
      icon:"directions_car_filled",
      title: "Car Selling",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      icon:"handyman",
      title: "Parts Repair",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      icon:"car_crash",
      title: "Car Insurance",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      icon:"electric_car",
      title: "Battery Replacement",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      icon:"local_gas_station",
      title: "Oil Change",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      icon:"support_agent",
      title: "24/7 Support",
      text:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]
  

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
