import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARS_DATA } from '../types/cars-data';
import { Car } from '../types/cars-interface';

@Injectable({
  providedIn: 'root'
})
export class CarsDealershipService {

  private cars_ = new BehaviorSubject(CARS_DATA);
  cars$ = this.cars_.asObservable();

  constructor(){}

  addCar(car: Car){
    const currentsCar = this.cars_.value;
    this.cars_.next([...currentsCar, car]);
  }
}
