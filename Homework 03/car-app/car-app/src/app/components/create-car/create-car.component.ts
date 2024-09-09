import { Component } from '@angular/core';
import { Car } from '../../types/cars-interface';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms';
import { CarsDealershipService } from '../../services/cars-dealership.service';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css'
})
export class CreateCarComponent {
  newCar: Car = {
    id: '',
    description: '',
    price: 0,
    brand: '',
    model: ''
  };

  constructor(private readonly createCarService: CarsDealershipService){}

  createCar(){
    this.newCar.id = uuidv4();
    this.createCarService.addCar({...this.newCar});
    this.clearInputs();
  }

  clearInputs(){
    this.newCar = {
      id: '',
      description: '',
      price: 0,
      brand: '',
      model: ''
    };
  }
}

