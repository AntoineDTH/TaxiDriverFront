import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl= "http://localhost:8080/gestionUsers/users/";
  constructor(private httpClient : HttpClient) {}

  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getUtilisateur(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }
}
