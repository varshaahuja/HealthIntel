import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pending-reports',
  templateUrl: './pending-reports.component.html',
  styleUrls: ['./pending-reports.component.css']
})
export class PendingReportsComponent implements OnInit {

  role:any;
  user:any;
  users:any;
  pending=[]
  loading=false;

  constructor(private localStorageService:LocalStorageService,private httpClient:HttpClient) { }

  ngOnInit() {
    this.getAllUsers();
    this.role = this.localStorageService.getRole();
    this.user= this.localStorageService.getUser();
  }

  //Retrieve All Users
  getAllUsers(){
    this.loading=true;
    this.localStorageService.getAllUsers().subscribe(data =>{
      this.users= data;
      for (var i=0; i<this.users.length;i++){
        if(this.users[i].pending=='yes'){
          this.pending.push(this.users[i]);
        }
      }
      this.loading=false;
    })
  }

}
