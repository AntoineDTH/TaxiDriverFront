import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NavbarAdminComponent } from "./navbar_admin/navbar-admin/navbar-admin.component";

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
  declarations: [NavbarAdminComponent],
  exports: [NavbarAdminComponent]
})
export class NavbarModule {}