import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Utilisateur } from '../model/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl= "http://localhost:8080/gestionUsers/users/";
  private urlMetier = "http://localhost:8080/gestionUsers/";
  constructor(private httpClient : HttpClient) {}

  //CRUD Utilisateur
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getUtilisateur(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveUtilisateur(user:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,user);
  }

  public deleteUtilisateur(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }

  //Services métiers

  public creerCourse(idchauffeur:string, arrivee:string, depart:string){
    const formData: FormData = new FormData();
    formData.append("arrivee",arrivee);
    formData.append("depart",depart);
    formData.append("chauffeur",idchauffeur);
    const req =new HttpRequest ("POST",this.urlMetier+"course",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public creerReservation(client:string, course:string){
    const formData: FormData = new FormData();
    formData.append("idclients",client);
    formData.append("idcourse",course);
    const req =new HttpRequest ("POST",this.urlMetier+"reservation",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public creerEval(com:string,client:string,note:string,chauffeur:string){
    const formData: FormData = new FormData();
    formData.append("commentaire",com);
    formData.append("client",client);
    formData.append("chauffeur",chauffeur);
    formData.append("note",note);
    const req =new HttpRequest ("POST",this.urlMetier+"evaluation",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public creerCom(com:any){
    const formData: FormData = new FormData();
    const req =new HttpRequest ("POST",this.urlMetier+"commentaire",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }

  public creerReclam(reclam:any){
    const formData: FormData = new FormData();
    const req =new HttpRequest ("POST",this.urlMetier+"reclamation",formData,{reportProgress:true, responseType:'text'});
    return this.httpClient.request(req);
  }


}
