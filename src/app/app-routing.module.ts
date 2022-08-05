import { UserComponent } from './home/user/user.component';
import { LoginGuard } from './login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: 'home',
     component: HomeComponent,
     canActivate: [LoginGuard],
    },
    { 
      path: 'user',
       component: UserComponent,
       canActivate: [LoginGuard],
      },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
