import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControlOptions } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../shared/password.validator';
import { ForbiddenNameValidator } from '../../shared/user-name.validator';
import { TemplateService } from '../../template.service';
import { User } from '../../user';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  registrationForm!: FormGroup;
  user = new User('', '', '');
    isRegistered = false;
    submitted = false;
    errorMessage = '';
    roles: any = [
        {name:'User', id:1, selected: true}, 
        {name:'Admin', id:2, selected: false},
    ]
  
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router, private authService: AuthService ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
      password: [''],
      email: [''],
    }, { validator: PasswordValidator } as AbstractControlOptions
    );

    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  // onSubmit() {
  //   // this._registrationService.register(this.registrationForm.value)
  //   //   .subscribe({
  //   //     next: (response: any) => console.log('Success!', response),
  //   //     error: (err: any) => console.error('Error!', err)
  //   //   })
  // }

  onSubmit(){
    this.submitted = true;
    this.user.userName = this.registrationForm.value.userName;
    this.user.email = this.registrationForm.value.email;
    this.user.password = this.registrationForm.value.password;
    //console.log(this.getSelectedRoles());
    //this.user.roles = this.getSelectedRoles();
    this.registerUser()
}

  signUp(){
    this.http.post<any>("http://localhost:8080/springJoole/users/users/createUser", this.registrationForm.value)
    .subscribe(res=>{
      alert("Account has been created");
      this.registrationForm.reset();
      this.router.navigate(['login'])
    }, err=>{
      alert("Something went Wrong")
        
    })
  }

  registerUser(){
    this.authService.signup(this.user)
    .subscribe(user=> {
        console.log(user);
        this.isRegistered = true;
    }, error=> {
        console.log(error);
        this.errorMessage = error;
        this.isRegistered = false;
    });
}

}
