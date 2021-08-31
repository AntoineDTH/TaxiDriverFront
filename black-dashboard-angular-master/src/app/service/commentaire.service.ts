import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUrl="http://localhost:8080/gestionCommentaire/commentaires";
  constructor(private httpClient:HttpClient) {}

  //CRUD
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getCommentaire(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveCommentaire(Commentaire:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Commentaire);
  }

  public deleteCommentaire(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }

}
