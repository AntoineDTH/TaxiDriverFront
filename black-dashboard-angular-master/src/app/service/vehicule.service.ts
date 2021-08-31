import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private baseUrl="http://localhost:8080/gestionVehicule/vehicules";
  constructor(private httpClient:HttpClient) {}

  //CRUD
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getVehicule(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveVehicule(Vehicule:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Vehicule);
  }

  public deleteVehicule(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
