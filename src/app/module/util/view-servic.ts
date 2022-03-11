import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  serviceTag$: BehaviorSubject<string> = new BehaviorSubject<string>('view Service init!');

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
