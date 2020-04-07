import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from './../../assets/canvasjs.min'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService, private httpClient:HttpClient, private router:Router){ }

  loading=false;
  users:any
  allAppointments:any;
  pending=[];
  search:string;
  searchUser:any;
  

  ngOnInit() {
      this.getAllUsers();
      this.getUser();
      this.getAllAppointments();
      this.drawChart();

  }

  //Retrieve All Users
  getAllUsers(){
    this.loading=true;
    this.localStorageService.getAllUsers().subscribe(data =>{
      this.users= data;
      for (var i=0; i<this.users.length;i++){
        if(this.users[i].pending=='yes'){
          this.pending.push(this.users[i]);
          this.loading=false;
        }
      }
    })
  }

  getUser(){
    this.localStorageService.getAllUsers().subscribe(data =>{
      this.searchUser= data;
      for(var  i=0; i<this.users.length;i++){
        if(this.users[i].username == this.search){
          this.searchUser = this.users[i]
        }
      }

    })
  }

  //Retrieve All Appointments
  getAllAppointments(){
    this.localStorageService.getAllAppointments().subscribe((data)=>{
      this.allAppointments = data;
    })
  }

  //ChartFuntion
  drawChart(){
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Zone Wise Report"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Green", color: "#009900"},
          { y: 65, label: "Amber", color:"#FFBF00" },
          { y: 45, label: "Red", color:"#e60000" },
        ]
      }]
    });
    chart.render();
  }

  viewProfile(id:any){
    this.router.navigate(['/profile/' + id]);

  }

}
