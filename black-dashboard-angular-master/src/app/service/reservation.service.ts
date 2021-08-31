import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl="http://localhost:8080/gestionReservation/reservations";
  constructor(private httpClient:HttpClient) {}

  //CRUD
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getReservation(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveReservation(Reservation:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Reservation);
  }

  public deleteReservation(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
