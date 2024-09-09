import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Car } from './types/cars-interface';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarsComponent, CreateCarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

