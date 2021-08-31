import { Routes } from "@angular/router";
import { VehiculesComponent } from "../../pages/vehicules/vehicules.component";

import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";
import { ReservationsComponent } from "src/app/pages/reservations/reservations.component";
import { ChauffeursComponent } from "src/app/pages/chauffeurs/chauffeurs.component";
import { FeedbacksComponent } from "src/app/pages/feedbacks/feedbacks.component";
import { EvaluationclientComponent } from "src/app/pages/evaluationclient/evaluationclient.component";

export const ClientLayoutRoutes: Routes = [
 
  { path: "compte", component: CompteComponent },
  { path: "home", component: HomeComponent },
  { path: "vehicules", component:VehiculesComponent},
  { path: "reservations", component:ReservationsComponent},
  { path: "chauffeurs", component:ChauffeursComponent},
  { path: "feedbacks", component:FeedbacksComponent},
  { path: "evaluationclient", component:EvaluationclientComponent},
];
