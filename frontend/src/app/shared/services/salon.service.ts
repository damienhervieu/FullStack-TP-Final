import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  API_URL = 'http://localhost:8000/salons/';

  constructor(
    private http: HttpClient
  ) { }

  get() {
    this.http.get(this.API_URL);
  }
}
