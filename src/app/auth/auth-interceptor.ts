import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from "rxjs";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {       
      let modifiedReq = req
      if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
          //console.log('With Token --- ' + sessionStorage.getItem('token'));
          modifiedReq = req.clone({
              setHeaders: {
                  Authorization: sessionStorage.getItem('token')
                }
          });
      }
      return next.handle(modifiedReq);
  }
}