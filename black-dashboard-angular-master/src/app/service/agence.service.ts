import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private baseUrl="http://localhost:8080/gestionAgence/agences";
  constructor(private httpClient:HttpClient) {}

  //CRUD Utilisateur
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getAgence(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveAgence(agence:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,agence);
  }

  public deleteAgence(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
