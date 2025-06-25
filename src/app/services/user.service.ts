import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  loggedUserId: string = "";
  constructor(private http:HttpClient){
    const loggedData = localStorage.getItem("studentId");
    if(loggedData){
      this.loggedUserId = loggedData
    }
   }
     onUserLogin(obj: any){
      return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login", obj) 
    }
}
