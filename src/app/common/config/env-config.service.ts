import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvConfigService {
  config: any;

  constructor(private http: HttpClient) {}

  initConfig(): Promise<any> {
    return this.http.post(`http://localhost:3000/config`, {}).toPromise();
  }
}
