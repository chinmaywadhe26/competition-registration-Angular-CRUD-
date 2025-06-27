import { Component, inject } from '@angular/core';
import { CompetitionModel } from '../../model/competition.model';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../services/competition.service';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-competition',
  imports: [FormsModule, DatePipe],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent implements OnInit {
  newObj: CompetitionModel = new CompetitionModel();
  competitionSrv = inject(CompetitionService);
  gridList: CompetitionModel[]= [];
  ngOnInit(): void {
      this.getAll();
  } 
  
  
  getAll(){
    this.competitionSrv.getCompetition().subscribe({
      next: (res) => {
        this.gridList = res;
      },
      error: () => {
        alert("API error");
      }
    })
  }
  
  
  onSave(){
    if(!this.newObj.competitionId){
        this.competitionSrv.createCompetition(this.newObj).subscribe({
      next: () => {
        this.getAll();
      },
      error: () => {
        alert("API error");
      }
    })
    } else{
      this.competitionSrv.updateCompetition(this.newObj).subscribe({
        next: () => {
          this.getAll();
          this.newObj = new CompetitionModel();
          alert("Updated successfully");
        }
      })
    }
  
  }

  onEdit(item: CompetitionModel){
    this.newObj = {...item};
  }

  onDelete(id: number){
    this.competitionSrv.deleteCompetition(id).subscribe({
      next: () => {
        this.getAll();
        alert("Deleted successfully");
      },
      error: () => {
        alert("Delete API failed");
      }
    })
  }

}
