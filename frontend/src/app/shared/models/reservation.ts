import { Salon } from './salon';

export class Reservation {

    constructor(
        private id: number = 0,
        private debut: string = '',
        private fin: string = '',
        private salon: Salon | null = null,
        private prenom: string = '',
        private nom: string = '',
        private telephone: string = '',
        private email: string = ''
        ) {
    }

}
