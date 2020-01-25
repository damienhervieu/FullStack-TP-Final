import { Salon } from './salon';

export class Reservation {

    constructor(
        public id?: number,
        public debut: string = '',
        public salon: string = '',
        public prenom: string = '',
        public nom: string = '',
        public telephone: string = '',
        public email: string = ''
        ) {
    }

}
