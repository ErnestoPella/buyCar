import { Component, Input } from '@angular/core';
import { Service } from '../../interfaces/service.interface';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {

  @Input() service!:Service;
  
}
