import { Annonce } from "./annonce";
import { Utilisateur } from "./utilisateur";

export class Commentaire {

    id?:number;
    commentaire?:String;
    client?:Utilisateur;
    annonce?:Annonce

}
