import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService, private router:Router) { }
  user:any;
  role:any;
  ngOnInit() {
    this.user = this.localStorageService.getUser();
    this.role = this.localStorageService.getRole();
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
