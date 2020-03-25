import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;
  errorMsg: any;
  eventData: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.eventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.eventData = this.eventForm.getRawValue();

  }

}
