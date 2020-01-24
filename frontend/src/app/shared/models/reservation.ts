import { Salon } from './salon';

export class Reservation {

    constructor(
        id: number = 0,
        debut: string = '',
        fin: string = '',
        salon: Salon = new Salon(),
        prenom: string = '',
        nom: string = ''
        ) {
    }

}
