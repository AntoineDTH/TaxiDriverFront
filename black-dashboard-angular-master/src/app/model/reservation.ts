import { Course } from "./course";
import { Utilisateur } from "./utilisateur";

export class Reservation {

    id?:number;
    course?:Course;
    clients?:Utilisateur[];
}
