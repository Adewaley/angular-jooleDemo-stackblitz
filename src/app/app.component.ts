import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserviceService } from './uservice.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /**implements OnInit */{
  title = 'JooleDemoAngular';

  constructor(private authService: AuthService){}
  //isLoggedIn = false;
  userName: string = '';
  categs: string[] = ['Mechanical', 'Automatic'];
  
  ngOnInit(): void {
    //this.isLoggedIn = this.authService.isLoggedIn();
  }
  getUserName(){
     return sessionStorage.getItem("username");
  }
  onLogOut(){
    this.authService.logOut();
  }

  loggedIn(){
    return this.authService.isUserLoggedIn()
  }

}
