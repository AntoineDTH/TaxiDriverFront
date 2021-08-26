import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarAdminComponent } from './navbar/navbar_admin/navbar-admin/navbar-admin.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent], /* NavbarAdminComponent */
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
