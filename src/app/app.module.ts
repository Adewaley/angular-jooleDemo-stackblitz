import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ProductListComponent } from './product-list/product-list.component';



registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    HomePageComponent,
    SearchComponent,
    ProductListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NzButtonModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
