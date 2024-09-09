import { Component, signal} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Car } from '../../types/cars-interface';
import { CarsDealershipService } from '../../services/cars-dealership.service';
import { CarsPipePipe } from '../../pipes/cars-pipe.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, CarsPipePipe, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = signal<Car[]>([]);
  searchingInput: string = '';

  constructor(private readonly carsService: CarsDealershipService){}

  ngOnInit(){
    this.carsService.cars$.subscribe((data) => {
      console.log(data);

      this.cars.set(data);
    })
  }
}
