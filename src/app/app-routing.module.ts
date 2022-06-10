import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full' },
  {path: 'signup', component:SignupPageComponent },
  {path: 'login', component:LoginPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
