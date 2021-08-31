import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private baseUrl="http://localhost:8080/gestionOffre/offres";
  constructor(private httpClient:HttpClient) {}

  //CRUD
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getOffre(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveOffre(Offre:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Offre);
  }

  public deleteOffre(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
