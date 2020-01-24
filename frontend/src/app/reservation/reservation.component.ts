import { Component, OnInit } from '@angular/core';
import { SalonService } from '../shared/services/salon.service';
import { Salon } from '../shared/models/salon';
import { Reservation } from '../shared/models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  heuresOuverture = [
    {
      heure: '9:00'
    },
    {
      heure: '10:00'
    },
    {
      heure: '11:00'
    },
    {
      heure: '12:00'
    },
    {
      heure: '13:00'
    },
    {
      heure: '14:00'
    },
    {
      heure: '15:00'
    },
    {
      heure: '16:00'
    },
    {
      heure: '17:00'
    },
    {
      heure: '18:00'
    }
  ];

  salons: Salon[] = [];
  reservation = new Reservation();
  date = '';

  constructor(
    private salonService: SalonService
  ) { }

  ngOnInit() {
    this.salonService.get().subscribe(salons => { this.salons = salons; });
  }

  enregistrerRDV() {
    console.log(this.date);
  }
}
