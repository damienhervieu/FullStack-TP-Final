import { Component, OnInit } from '@angular/core';
import { SalonService } from '../shared/services/salon.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(
    salonService: SalonService
  ) { }

  ngOnInit() {

  }

}
