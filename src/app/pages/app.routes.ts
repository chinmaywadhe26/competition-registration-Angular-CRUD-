import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { SubmitProjectComponent } from './submit-project/submit-project.component';
import { CompetitionComponent } from '././competition/competition.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, 
    {
        path: 'home', 
        component: HomeComponent,

    },
    {
        path: 'login', 
        component: LoginComponent,

    },
    {
        path: 'dashboard', 
        component: DashboardComponent,
    },
    {
        path: 'all-projects', 
        component: ProjectsComponent,
    }, 
    {
        path:'register', 
        component: RegisterComponent,
    }, 
    {
        path: 'students', 
        component: StudentsComponent,
    }, 
    {
        path: 'submitProject', 
        component: SubmitProjectComponent
    },
    {
        path: 'competition',
        component: CompetitionComponent
    }
];
