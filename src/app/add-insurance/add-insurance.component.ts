import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  insuranceForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  formErrors ={
    insuranceName: '',
    irda:'',
    userNumber:''
  }

  createForm() {
    this.insuranceForm = this.formBuilder.group({
      insuranceName: ['', Validators.required],
      irda: ['', Validators.required],
      userNumber: ['', Validators.required]
    })
  }

  onSubmit(){
    
  }

}
