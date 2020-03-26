import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  userAppointmets=[]
  role:any;
  ngOnInit() {
    this.role = this.localStorageService.getRole();
  }

}
