import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ClientLayoutRoutes } from "./client-layout.routing";
import { CompteComponent } from "../../pages/compte/compte.component";
import { HomeComponent } from "../../pages/home/home.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


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
    HomeComponent
    // RtlComponent
  ]
})
export class ClientLayoutModule {}