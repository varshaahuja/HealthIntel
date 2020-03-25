import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router, private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  
  allEvents:any;
  role:any;
  elem:any;

  ngOnInit() {
    this.getAllEvents();
    this.role = this.localStorageService.getRole()

  }

  getAllEvents(){
    this.httpClient.get('/assets/data/events.json').subscribe(data =>{
      this.allEvents = data;
    })
  }

  viewEvent(id:any){
    this.router.navigate(['/viewEvent/' + id]);
  }

}
