import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService, private router:Router) { }

  user:any;
  role:any;
  allFaqs:any
  ngOnInit() {
    this.getAllEvents();
    this.user = this.localStorageService.getUser();
    this.role = this.localStorageService.getRole();
  }

  getAllEvents(){
    this.httpClient.get('/assets/data/faqs.json').subscribe(data =>{
      this.allFaqs = data;
    })
  }

  logo(){

    if(this.role == 'user'){
      this.router.navigate(['/userDashboard']);
    }
    else if(this.role == 'admin'){
      this.router.navigate(['/adminDashboard']);
    }
    else{
      this.router.navigate(['/']);
    }
  }


  
}
