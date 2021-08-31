import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl="http://localhost:8080/gestionEvaluation/Evaluation";
  constructor(private httpClient:HttpClient) {}

  //CRUD
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getEvaluation(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveEvaluation(Evaluation:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Evaluation);
  }

  public deleteEvaluation(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
