import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  allReports:any;
  role:any;
  user:any;
  elem:any;
  dtOptions: DataTables.Settings = {};
  
  constructor(private localStorageService:LocalStorageService, private router:Router, private httpClient:HttpClient) { 
  }

 
  ngOnInit() {
    this.getAllReports();
    this.role = this.localStorageService.getRole();
    this.user= this.localStorageService.getUser();
  }

  getAllReports(){
    this.httpClient.get('/assets/data/reports.json').subscribe(data =>{
      this.allReports = data;
    })
  }

  viewReport(id:any){
    this.router.navigate(['/viewReport/' + id]);
  }

}
