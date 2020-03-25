import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  loading=false;
  event: any;
  eventId:any;
  events: any;

  constructor(private activatedRoute:ActivatedRoute, private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  ngOnInit() {
    this.loading=true;
    this.eventId = this.activatedRoute.snapshot.params['id'];
     this.getEventDetails(this.eventId);
    this.loading = false;
  }

  getEventDetails(id:any){
    this.localStorageService.getAllEvents().subscribe(data =>{
      this.events = data;

      for (var i=0; i<this.events.length; i++){
        if(id ==this.events[i]['id']){
          this.event = this.events[i]
        }
      }      
    })
  }

}
