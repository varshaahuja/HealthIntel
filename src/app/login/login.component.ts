import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users:any;
  loginData:any;
  loggedIn: Observable<any>;
  loggedInSubject: Subject<any>;
  errorMsg:any;

  constructor( private formBuilder: FormBuilder, private router:Router, private httpClient: HttpClient, private localStorageService:LocalStorageService) {
   }

  formErrors ={
    username: '',
    password:''
  }


  ngOnInit() {
    this.createForm();
    this.httpClient.get('/assets/data/users.json').subscribe(data =>{
      this.users = data;
    })
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {  
    this.loginData = this.loginForm.getRawValue();

    for(var i=0; i<this.users.length; i++){
     if(this.loginData['username']==this.users[i]['username']){
       if(this.loginData['password']== this.users[i]['password']){
         this.localStorageService.setUser(this.users[i]['username'])
         this.localStorageService.setRole(this.users[i]['role'])
         console.log('success');
         this.errorMsg="";
         if(this.users[i]['role'] =="admin"){
          this.router.navigate(['/adminDashboard']);
          return true;
         }
         else if(this.users[i]['role'] =="user"){
          this.router.navigate(['/userDashboard']);
          return true;    
         }

       }
       else{
        this.errorMsg = 'Incorrect username and password';
        console.log('Incorrect username and password');
        return false;
       }
     }
    }
  }

}
