import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salon } from '../models/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  API_URL = 'http://localhost:8000/salons';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<Salon[]>(this.API_URL, this.httpOptions);
  }

  getById(id: string) {
    return this.http.get<Salon>(this.API_URL + '/' + id, this.httpOptions);
  }
}
