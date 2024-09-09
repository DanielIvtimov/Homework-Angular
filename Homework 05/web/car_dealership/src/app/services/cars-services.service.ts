import { Injectable } from '@angular/core';
import { environment } from '../types/cars_response_server';
import { HttpClient } from '@angular/common/http';
import { CarsData } from '../types/cars_interface';
import { catchError, Observable, of,} from 'rxjs';
import { Response } from '../types/cars_response_server';

@Injectable({
  providedIn: 'root'
})
export class CarsServicesService {
  private readonly carsPathServer = `${environment.apiURL}/cars`;

  constructor(private readonly http: HttpClient){}

  getCars(): Observable<Response<CarsData[]>>{
    return this.http.get<Response<CarsData[]>>(this.carsPathServer)
    .pipe(
      catchError(error => {
        console.log(error);
        return of({payload: [], total: 0});
      })
    )
  }
}
  


