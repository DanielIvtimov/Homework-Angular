import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './types/cars-data';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent, CreateCarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  carsData: Car[] = [
    {
      id: '1',
      description: 'A professional and innovative SUV',
      price: 30000,
      brand: 'Peugeot',
      model: '3008'
    },
    {
      id: '2',
      description: 'A symbol of luxury and performance',
      price: 60000,
      brand: 'Audi',
      model: 'A6'
    }
  ];

  addCar(car: Car){
    this.carsData = [...this.carsData, car];
  }
}

