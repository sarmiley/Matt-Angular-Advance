import { BehaviorSubject } from 'rxjs';

export class CommonService {
  serviceTag$: BehaviorSubject<string> = new BehaviorSubject<string>('common service init!');

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
