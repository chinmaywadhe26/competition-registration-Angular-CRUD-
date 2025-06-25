import { Component, inject} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../services/user.service';
import {Router, RouterOutlet, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })
  
  userService = inject(UserService)
  router = inject(Router);
  onLogin(){
    const val  = this.loginForm.value;
    this.userService.onUserLogin(val).subscribe({
      next:(res:any)=>{
        localStorage.setItem("studentId", res.userId)
        localStorage.setItem("loggedUser", JSON.stringify(res));
        this.router.navigateByUrl("/home");
        this.userService.loggedUserId = res.userId;
        alert("Login successs");
      },
      error:()=>{

      }
    })
  }
}
