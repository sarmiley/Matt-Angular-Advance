import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  serviceTag$: BehaviorSubject<string> = new BehaviorSubject<string>('Util Service init!');

  constructor() {}

  setTag(value: string): void {
    this.serviceTag$.next(value);
  }

  getTag(): string {
    return this.serviceTag$.getValue();
  }

  subTag() {
    return this.serviceTag$.asObservable();
  }
}
