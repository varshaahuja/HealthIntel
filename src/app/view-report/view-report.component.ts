import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  role:any;
  reportId:any;
  report:any;
  reports:any;
  loading=false;
  constructor(private localStorageService:LocalStorageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.loading=true;
    this.reportId = this.activatedRoute.snapshot.params['id'];
    this.role= this.localStorageService.getRole();
    this.getReportDetails(this.reportId);
    this.loading=false;
  }

  getReportDetails(id:any){
    this.localStorageService.getAllReports().subscribe(data =>{
      this.reports = data;
      for (var i=0; i<this.reports.length; i++){
        if(id ==this.reports[i]['id']){
          this.report = this.reports[i]
        }
      }      
    })
  }

}
