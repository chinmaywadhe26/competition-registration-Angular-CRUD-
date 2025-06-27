import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../constants/constant';
import { CompetitionModel } from '../model/competition.model';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient  ) { }
  
  getCompetition(): Observable<CompetitionModel[]>{
      return this.http.get<CompetitionModel[]>(constant.API_URL + "/GetAllCompetition");
  }
  deleteCompetition(id: number){
    return this.http.delete(constant.API_URL + `/delete/${id}`)
  }
  updateCompetition(data: CompetitionModel): Observable<any>{
    return this.http.put(constant.API_URL + `/update/${data.competitionId}`, data);
  }
  createCompetition(obj: CompetitionModel){
    return this.http.post(constant.API_URL + "/competition", obj);
  }

}
