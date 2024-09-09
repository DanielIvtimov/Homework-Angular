import { Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../../types/cars-interface';
import { CarsDealershipService } from '../../services/cars-dealership.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = signal<Car[]>([]);

  constructor(private readonly carsService: CarsDealershipService){}

  ngOnInit(){
    this.carsService.cars$.subscribe((data) => {
      console.log(data);

      this.cars.set(data);
    })
  }
}
