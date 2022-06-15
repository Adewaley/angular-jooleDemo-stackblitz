import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full' },
  {path: 'signup', component:SignupPageComponent },
  {path: 'login', component:LoginPageComponent },
  {path: 'home', component:HomePageComponent },
  {path: 'search', component:SearchComponent },
  { path: 'productlist', component: ProductListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
