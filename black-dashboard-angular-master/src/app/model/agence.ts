import { Rapport } from "./rapport";
import { Utilisateur } from "./utilisateur";
import { Vehicule } from "./vehicule";

export class Agence {

    id?:number;
    respoAgence?:Utilisateur;
    vehicules?:Vehicule[];
    chauffeurs?:Utilisateur[];
    rapports?:Rapport[];

}
