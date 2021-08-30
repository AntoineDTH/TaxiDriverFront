import { Routes } from "@angular/router";
import { VehiculesComponent } from "../../pages/vehicules/vehicules.component";

import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";
import { ReservationsComponent } from "src/app/pages/reservations/reservations.component";

export const ClientLayoutRoutes: Routes = [
 
  { path: "compte", component: CompteComponent },
  { path: "home", component: HomeComponent },
  { path: "vehicules", component:VehiculesComponent},
  { path: "reservations", component:ReservationsComponent}
];
