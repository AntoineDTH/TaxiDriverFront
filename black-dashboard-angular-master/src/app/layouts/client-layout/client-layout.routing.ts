import { Routes } from "@angular/router";
import { VehiculesComponent } from "../../pages/vehicules/vehicules.component";

import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";

export const ClientLayoutRoutes: Routes = [
 
  { path: "compte", component: CompteComponent },
  { path: "home", component: HomeComponent },
  { path: "vehicules", component:VehiculesComponent}
];
