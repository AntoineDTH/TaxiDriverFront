import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl="http://localhost:8080/gestionCourse/courses";
  constructor(private httpClient:HttpClient) {}

  //CRUD Utilisateur
  public findAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public getCourse(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }

  public saveCourse(Course:any):Observable<any>{
    return this.httpClient.post(this.baseUrl,Course);
  }

  public deleteCourse(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+id);
  }
}
