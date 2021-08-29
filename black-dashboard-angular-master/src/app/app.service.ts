import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from './model/role';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  roles:Role[];
  autorite:String;
  constructor(private httpClient:HttpClient) { }
  authenticate(credentials, callback){
    const headers = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:8080/login/users', {headers: headers}).subscribe(response => {
      if(response['username']){
        this.authenticated = true;
        this.roles=response['roles'];
        this.autorite=this.roles[0].libelle;
        console.log(this.autorite);
      }
      else{
        this.authenticated = false
      }
      return callback && callback();
    });
  }
}