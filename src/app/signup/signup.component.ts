import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  signupForm: FormGroup
  errorMsg:any
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ssn: ['', Validators.required],
      contactNumber: ['', Validators.required],
      insuranceId: ['', Validators.required],
      emergencyContactNumber: ['', Validators.required],
      emergencyContactName: ['', Validators.required],
    })
  }

  formErrors ={
    username: '',
    password:'',
    confirmPassword:'',
    firstName: '',
    lastName:'',
    address: '',
    email:'',
    ssn: '',
    contactNumber:'',
    insuranceId: '',
    emergencyContactNumber:'',
    emergencyContactName: '',
  }

  onSubmit(){

  }

}
