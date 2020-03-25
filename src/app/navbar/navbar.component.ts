import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auth:any;
  name:any;
  role:any;

  constructor(private router:Router, private localStorageService:LocalStorageService) { }


  ngOnInit() {
    this.auth = "auth";
    this.name =  this.localStorageService.getUser();
    this.role = this.localStorageService.getRole();
  }

  logout(){
    this.localStorageService.clearAll()
    this.router.navigate(['/login']);
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
