import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  userAppointmets:any;
  allAppointments:any;
  role:any;
  user:any
  users:any;


  ngOnInit() {
    this.role = this.localStorageService.getRole();
    this.user = this.localStorageService.getUser()
    this.getUserAppointments(this.user);
    this.getAllAppointments();
  }

  getUserAppointments(user:any){
    this.localStorageService.getAllUsers().subscribe((data)=>{
      this.users = data;
      for (var i=0; i<this.users.length; i++){
        if(this.user==this.users[i]['username']){
          this.userAppointmets= this.users[i].appointments;
        }
      }
    })
  }

  getAllAppointments(){
    this.localStorageService.getAllAppointments().subscribe((data)=>{
      this.allAppointments = data
    })
  }

}
