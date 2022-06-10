import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserviceService {

  

  constructor(private http: HttpClient) { }

  // public getUser(): Observable<User[]>{
  //   return this.http.get<any>(`${this.apiServerUrl}/users/all`)
  // }
}
