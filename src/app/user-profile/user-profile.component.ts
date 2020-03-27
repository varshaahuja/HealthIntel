import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService, private httpClient:HttpClient) { }

  user:any;
  role:any;
  users:any;
  profile:any;
  userId:any;

  ngOnInit() {
    this.user = this.localStorageService.getUser();
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.role = this.localStorageService.getRole();
    this.getProfile(this.user, this.userId);
  }

  getProfile(user:any, id:any){
    this.localStorageService.getAllUsers().subscribe(data =>{
      this.users = data;

      if(id){
        for (var i=0; i<this.users.length; i++){
          if(id ==this.users[i]['id']){
            this.profile = this.users[i]
          }
        }
      }
      
      else{
        for (var i=0; i<this.users.length; i++){
          if(this.user==this.users[i]['username']){
            this.profile = this.users[i]
          
        }  
      }
      }
    })
  }
}
