import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuycarRoutingModule } from './buycar-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BuycarRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BuycarModule { }
