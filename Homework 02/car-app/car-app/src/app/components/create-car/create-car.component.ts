import { Component, EventEmitter, Output} from '@angular/core';
import { Car } from '../../types/cars-data';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule } from '@angular/forms';

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

  @Output() carCreated = new EventEmitter<Car>();

  createCar(){
    this.newCar.id = uuidv4();
    this.carCreated.emit({...this.newCar});
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
