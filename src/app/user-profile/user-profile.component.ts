import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService, private httpClient:HttpClient) { }

  user:any;
  users:any;
  profile:any;

  ngOnInit() {
    this.user = this.localStorageService.getUser();
    this.getProfile(this.user);
  }

  getProfile(user:any){
    this.localStorageService.getAllUsers().subscribe(data =>{
      this.users = data;

      for (var i=0; i<this.users.length; i++){
        if(this.user==this.users[i]['username']){
          this.profile = this.users[i]
        }
      }      
    })
  }
}
