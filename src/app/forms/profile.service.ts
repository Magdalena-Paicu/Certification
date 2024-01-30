import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  data: any[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
      },
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
      },
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
      },
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
      },
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        zip: '12345',
      },
    },
  ];

  getData() {
    return of(this.data);
  }
}
