import { Utilisateur } from "./utilisateur";

export class Evaluation {

    id?:number;
    commentaire?:String;
    client?:Utilisateur;
    chauffeur?: Utilisateur;
    note?:number;

}
