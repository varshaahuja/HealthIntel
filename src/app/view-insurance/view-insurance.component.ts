import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }
  loading=false;
  insurances:any;
  ngOnInit() {
    this.loading=true;
     this.localStorageService.getAllInsurance().subscribe(data=>{
      this.insurances = data;
      this.loading=false;
    });
  }

}
