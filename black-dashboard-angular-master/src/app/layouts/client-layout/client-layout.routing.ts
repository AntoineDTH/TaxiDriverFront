import { Routes } from "@angular/router";

import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";

export const ClientLayoutRoutes: Routes = [
 
  { path: "compte", component: CompteComponent },
  { path: "home", component: HomeComponent },
];
