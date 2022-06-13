import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { UserviceService } from '../uservice.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}
const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl = 'http://localhost:8080/springJoole/users/'; 

   constructor(private httpClient:HttpClient, private router: Router) { }

   signup(user: User): Observable<any>{
      //console.log('In AuthService');
      return this.httpClient.post(this.baseUrl + 'createUser', user, { headers, responseType: 'text'})
      .pipe(catchError(this.handleError));
   }

   // authenticate(username:string, password:string) {
   // return this.httpClient.post<any>('http://localhost:8080/springJoole/authenticate',{username,password}).pipe(
   //    map(
   //    userData => {
   //       sessionStorage.setItem('username',username);
   //       let tokenStr= 'Bearer '+userData.token;
   //       sessionStorage.setItem('token', tokenStr);
   //       return userData;
   //    }
   //    )

   // );
   // }

   login(user: string, password: string){
      // console.log('In AuthService -  login');JKSDLHB
      this.baseUrl = this.baseUrl + 'authenticate' + '?username=' + user + '&password=' + password;
      return this.httpClient.post<any>(this.baseUrl, {headers})
        .pipe(catchError(this.handleError),
          map(userData => {
            sessionStorage.setItem("username", user);
            let tokenStr = "Bearer " + userData.token;
            console.log("Token---  " + tokenStr);
            sessionStorage.setItem("token", tokenStr);
            sessionStorage.setItem("roles", JSON.stringify(userData.roles));
            return userData;
          })
      ); 
   }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    this.router.navigate(['/login']);
  }

  private handleError(httpError: HttpErrorResponse) {
   let message:string = '';

   if (httpError.error instanceof ProgressEvent) {
     console.log('in progrss event')
     message = "Network error";
   }
   else {
     message = httpError.error.message;
     // The backend returned an unsuccessful response code.
     // The response body may contain clues as to what went wrong.
     console.error(
       `Backend returned code ${httpError.status}, ` +
       `body was: ${httpError.error}`);
   }
   // Return an observable with a user-facing error message.
   return throwError(message);
 }
}