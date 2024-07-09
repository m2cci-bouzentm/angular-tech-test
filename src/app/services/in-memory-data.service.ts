import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ReferenceAnalysis, UsureAnalysis } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const usureAnalysis: UsureAnalysis[] = [
      {
        id: 1,
        vehicle: 'Car 1',
        rate: 'A',
        imageUrl: 'assets/images/usure_image_sample.png',
      },
      {
        id: 2,
        vehicle: 'Car 2',
        rate: 'B',
        imageUrl: 'assets/images/usure_image_sample.png',
      },
      {
        id: 3,
        vehicle: 'Car 3',
        rate: 'B',
        imageUrl: 'assets/images/usure_image_sample.png',
      },
      {
        id: 4,
        vehicle: 'Car 4',
        rate: 'B',
        imageUrl: 'assets/images/usure_image_sample.png',
      },
      {
        id: 5,
        vehicle: 'Car 5',
        rate: 'C',
        imageUrl: 'assets/images/usure_image_sample.png',
      },
    ];

    const referenceAnalysis: ReferenceAnalysis[] = [
      {
        id: 1,
        vehicle: 'Truck 1',
        dimension: 'Large',
        imageUrl: 'assets/images/reference_image_sample.png',
      },
      {
        id: 2,
        vehicle: 'Truck 2',
        dimension: 'Small',
        imageUrl: 'assets/images/reference_image_sample.png',
      },
      {
        id: 3,
        vehicle: 'Truck 2',
        dimension: 'Small',
        imageUrl: 'assets/images/reference_image_sample.png',
      },
      {
        id: 4,
        vehicle: 'Truck 2',
        dimension: 'Small',
        imageUrl: 'assets/images/reference_image_sample.png',
      },
    ];

    return { usureAnalysis, referenceAnalysis };
  }
}