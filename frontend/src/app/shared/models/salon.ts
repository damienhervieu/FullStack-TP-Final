import { Reservation } from './reservation';

export class Salon {

    constructor(
        public id: number = 0,
        public nom: string = '',
        public adresse: string = '',
        public reservations?: string[]
        ) {
    }

}
