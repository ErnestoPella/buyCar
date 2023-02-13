import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuycarRoutingModule } from './buycar-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    HomeComponent,
    StatusCardComponent,
    CarouselComponent
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
