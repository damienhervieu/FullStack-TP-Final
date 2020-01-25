import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SalonService } from '../shared/services/salon.service';
import { Salon } from '../shared/models/salon';
import { Reservation } from '../shared/models/reservation';
import { ReservationService } from '../shared/services/reservation.service';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  eventData: object[] = [];

  salons: Salon[] = [];
  salonId: string;
  reservation = new Reservation();
  reservations: Reservation[] = [];

  constructor(
    private salonService: SalonService,
    private reservationService: ReservationService
  ) { }


  ngOnInit() {
    this.salonService.get().subscribe(salons => {this.salons = salons; });
  }

  getSalon() {
    this.salonService.getById(this.salonId).subscribe(
      salon => {
        salon.reservations.forEach(reservation => {
          this.reservationService.getByIri(reservation).subscribe(
            r => {
              this.reservations.push(r);
            }
          );
        });
        this.updateEvents();
      }
    );
  }

  updateEvents() {
    this.eventData = [];
    this.reservations.forEach(reservation => {
      this.eventData.push({title: reservation.nom + reservation.prenom, start: reservation.debut, end: '2020-01-01'});
    });
    console.log(this.eventData);
  }

  enregistrerRDV() {
    this.reservation.salon = '/salons/' + this.salonId;
    this.reservation.debut = new Date(this.reservation.debut).toISOString();
    console.log(this.reservation);
    this.reservationService.post(this.reservation).subscribe(response => { console.log(response); });
  }
}
