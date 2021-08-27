import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = {username:'',password:''}
  constructor(private AppService : AppService,private HttpClient:HttpClient,private router :Router) { }

  ngOnInit(): void {
  }

  login(){
    this.AppService.authenticate(this.credentials,()=>{this.router.navigateByUrl('/dashboard')});
    return false;
  }
}
