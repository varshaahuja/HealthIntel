import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  role:any;
  messages:any;
  messageId:any;

  ngOnInit() {
    this.role = this.localStorageService.getRole()

  }

  addMessage(){

    this.messages += this.messageId
    console.log(this.messages)
  }

}
