import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  button: string = 'menu';
  
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
