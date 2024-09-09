import { CarsEnumFuel, CarsEnumtransmission, CarsEnumType } from "./cars_enum_data";

export interface CarsData {
    id?: string; 
    description?: string; 
    price?: number; 
    images?: string[]; 
    type?: CarsEnumType;
    year?: number; 
    color?: string; 
    fuelType?: CarsEnumFuel
    distance?: number; 
    isNew?: boolean; 
    location?: { 
      city?: string; 
      country?: string;  
    },
    brand?: string; 
    model?: string; 
    enginePower?: number; 
    doors?: number; 
    seats?: number; 
    transmission?: CarsEnumtransmission 
}




