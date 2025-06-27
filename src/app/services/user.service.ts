import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  loggedUserId: string = "";
  loggedUserData: any = undefined;
  constructor(private http:HttpClient){
    const loggedData = localStorage.getItem("studentId");
    const loggedUserData = localStorage.getItem("loggedUser");
    if(loggedData && loggedUserData){
      this.loggedUserId = loggedData
      this.loggedUserData = JSON.parse(loggedUserData);
    }
   }
     onUserLogin(obj: any){
      return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login", obj) 
    }
}
