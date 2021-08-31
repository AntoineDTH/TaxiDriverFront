import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientLayoutRoutes } from "./client-layout.routing";
import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";
import { ReservationsComponent } from "src/app/pages/reservations/reservations.component";
import { ChauffeursComponent } from "src/app/pages/chauffeurs/chauffeurs.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FeedbacksComponent } from "src/app/pages/feedbacks/feedbacks.component";
import { EvaluationclientComponent } from "src/app/pages/evaluationclient/evaluationclient.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [

    CompteComponent,
    HomeComponent,
    ReservationsComponent,
    ChauffeursComponent,
    FeedbacksComponent,
    EvaluationclientComponent
  ]
})
export class ClientLayoutModule {}
