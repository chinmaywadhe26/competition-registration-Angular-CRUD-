import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userService = inject(UserService);
  
  router = inject(Router);
  title = 'competitionRegistration';

  onLogOff(){
    localStorage.removeItem("studentId");
    this.userService.loggedUserId = "";
    this.router.navigateByUrl("/home");
  }
}
