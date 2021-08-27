import { Role } from "./role";

export class Utilisateur {

    idUtilisateur?:number;
    nom?:String;
    prenom?:String;
    mail?:String;
    username?:String;
    password?:String;
    roles?:Role[];
    enables?:boolean;
    /*
    reservations?:Reservation[];
    agences?;Agence[];
    feedbacks?:Feedback[];
    */

}
