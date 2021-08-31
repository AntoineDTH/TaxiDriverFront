import { Offre } from "./offre";
import { Trajet } from "./trajet";
import { Utilisateur } from "./utilisateur";

export class Course {

    id?:number;
    offre?:Offre;
    trajet?:Trajet;
    chauffeur?:Utilisateur;

}
