import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, Validators, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router, private authService: AuthService) { }

  submitted = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    })
  }

  login(){
    this.http.get<any>("http://localhost:8080/springJoole/users/all")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password       
      });
      if (user){
        alert("Login Succes");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("something went wrong");
    
    })
  }

  onSubmit(){
    this.submitted = true;
    this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
        data=>{
            this.isLoggedin = true
            this.router.navigate(['home']);
        },
        error=>{
            console.log(error);
            this.errorMessage = error;
            this.isLoggedin = false;
            this.isLoginFailed = true;
        }
    );
  }

}
