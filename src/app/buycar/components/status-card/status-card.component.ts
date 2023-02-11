import { Component, Input } from '@angular/core';
import { Status } from '../../interfaces/status.interface';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent {

  @Input() statuss!: Status;
  

  constructor(){}

}
