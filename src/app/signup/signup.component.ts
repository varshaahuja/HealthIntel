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
  index:any;

  ngOnInit() {
    this.createForm();
    this.index=4;

  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
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
    city: '',
    state: '',
    zipcode: '',
    email:'',
    ssn: '',
    contactNumber:'',
    insuranceId: '',
    emergencyContactNumber:'',
    emergencyContactName: '',
  }

  onSubmit(){

  }

  stepOne(){
    this.index=1
  }

  stepTwo(){
    this.index=2;
  }

  stepThree(){
    this.index=3
  }

  stepFour(){
    this.index=4
  }

}
