import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  API_URL = 'http://localhost:8000/reservations/';

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
    return this.http.get<Reservation[]>(this.API_URL, this.httpOptions);
  }

  create(reservation: Reservation) {
      return this.http.post<Reservation>(this.API_URL, reservation, this.httpOptions);
  }
}
