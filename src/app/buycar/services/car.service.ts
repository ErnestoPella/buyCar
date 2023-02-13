import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private http: HttpClient) { }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }
}
