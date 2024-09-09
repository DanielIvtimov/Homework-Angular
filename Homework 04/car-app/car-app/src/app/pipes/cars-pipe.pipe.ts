import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/cars-interface';

@Pipe({
  name: 'carsPipe',
  standalone: true
})
export class CarsPipePipe implements PipeTransform {

  transform(cars: Car[], searchingInput: string): Car[] {
    if(!cars || !searchingInput){
      return cars;
      // logika od casot :D 
    }
    return cars.filter((car) => car.brand.toLocaleLowerCase().includes(searchingInput));
  }
}

