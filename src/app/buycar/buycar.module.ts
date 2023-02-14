import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuycarRoutingModule } from './buycar-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarCardComponent } from './components/car-card/car-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatusCardComponent,
    CarCardComponent
  ],
  imports: [
    CommonModule,
    BuycarRoutingModule,
    SharedModule,
    MaterialModule,
    CarouselModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class BuycarModule { }
