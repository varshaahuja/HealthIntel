import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  forgotForm:FormGroup;
  errorMsg:any;

  ngOnInit() {
  }
  formErrors ={
    email: ''
  }

  onSubmit(){
    
  }

}
