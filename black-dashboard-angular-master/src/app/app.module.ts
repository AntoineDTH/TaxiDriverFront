import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './pages/login/login.component';
import { Injectable } from "@angular/core";
import { AdminComponent } from './admin/admin.component';




@Injectable()
export class XhrInterceptor implements HttpInterceptor{
  intercept (req:HttpRequest<any>,next : HttpHandler){
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ClientLayoutComponent, LoginComponent, AdminComponent],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass:XhrInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
