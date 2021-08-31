import { Course } from "./course";
import { Utilisateur } from "./utilisateur";

export class Reclamation {

    id?:number;
    commentaire?:String;
    client?:Utilisateur;
    course?:Course;    
}
