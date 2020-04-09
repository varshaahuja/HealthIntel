import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';
import * as CanvasJS from './../../assets/canvasjs.min'

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  loading= false;
  events:any;
  latestEvent:any;
  username:any; 
  user:any;
  users:any;
  ngOnInit() {
    this.loading= true;
    this.getLatestEvent();
    this.getUser();
    this.username = this.localStorageService.getUser();

    //Charts Functions

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Your Health Intel"
      },
      axisX: {
        valueFormatString: "MMM,YY",
      },
      axisY: {
        title: "Score",
        includeZero: false,
      },
      legend:{
        cursor: "pointer",
        fontSize: 16,
        itemclick: toggleDataSeries
      },
      toolTip:{
        shared: true
      },
      data: [{
        name: "Stress",
        type: "spline",
        showInLegend: true,
        dataPoints: [
          { x: new Date(2017,6), y: 31 },
          { x: new Date(2017,7), y: 30 },
          { x: new Date(2017,8), y: 29 }
        ]
      },
      {
        name: "Happiness",
        type: "spline",
        showInLegend: true,
        dataPoints: [
          { x: new Date(2017,6), y: 20 },
          { x: new Date(2017,7), y: 25 },
          { x: new Date(2017,8), y: 25 }
        ]
      },
      {
        name: "Physical Health",
        type: "spline",
        showInLegend: true,
        dataPoints: [
          { x: new Date(2017,6), y: 22 },
          { x: new Date(2017,7), y: 19 },
          { x: new Date(2017,8), y: 23 }
        ]
      }]
    });
    chart.render();
    
    function toggleDataSeries(e){
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else{
        e.dataSeries.visible = true;
      }
      chart.render();
    }
  }

  getLatestEvent(){
    this.localStorageService.getAllEvents().subscribe(data =>{
      this.events = data;
      for (var i=0; i<this.events.length;i++){
        this.latestEvent = this.events[0];
        this.loading = false;
      }
  })
  }

  getUser(){
    this.loading=true;
    this.username= this.localStorageService.getUser();
    this.localStorageService.getAllUsers().subscribe(data=>{
      this.users = data;
    })
  }
}
