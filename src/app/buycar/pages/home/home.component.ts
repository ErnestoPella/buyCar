import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../interfaces/status.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  button: string = 'menu';
  status: Status[] = [
    {
      icon: 'home',
      status: 150,
      title: 'branches'
    },
    {
      icon: 'person',
      status: 590,
      title: 'happy clients'
    },
    {
      icon: 'sell car',
      status: 890,
      title: 'new cars'
    },
    {
      icon: 'sell',
      status: 4770,
      title: 'cars sold'
    }
  ];
  
  constructor(private routes: Router){}

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
