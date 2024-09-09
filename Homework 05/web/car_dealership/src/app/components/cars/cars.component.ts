import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { finalize, map, Observable, tap } from 'rxjs';
import { CarsData } from '../../types/cars_interface';
import { CarsServicesService } from '../../services/cars-services.service';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent, AsyncPipe, MatGridListModule, NgFor],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars: Observable<CarsData[]> = new Observable<CarsData[]>();

  constructor(private readonly carsService: CarsServicesService){}

  ngOnInit(){
    this.getCars();
  }

  getCars(){
    this.cars = this.carsService.getCars().pipe(
      map((response) => response.payload),
      tap(() => console.log('Cars loaded successfully')),
      finalize(() => console.log('Loading finished'))
    )
  }
}

