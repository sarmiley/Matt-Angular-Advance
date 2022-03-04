import { Injectable } from '@angular/core';
import { HomeModule } from './home.module';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serviceName: string = 'HomeService'

  constructor() { }
}
