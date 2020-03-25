import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-view-insurance',
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  insurances:any;
  ngOnInit() {
     this.localStorageService.getAllInsurance().subscribe(data=>{
      this.insurances = data;
      console.log(this.insurances)
    });
  }

}
