import { Component, input} from '@angular/core';
import { Car } from '../../types/cars-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = input.required<Car[]>();
}
