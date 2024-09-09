import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarsData } from '../../types/cars_interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DecimalPipe],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car!: CarsData

  //Gi probuvav slednite sintaksi ali imav errors koj sto nemozev da gi resam 
  // So ovaa linija: @Input() car!: CarsData mi raboti for of loop

  //So ovie linii ne mi raboti:
  
  // car = input<CarsData>();
  // car = input.reqiured<CarsData[]>([]); 
}

 

