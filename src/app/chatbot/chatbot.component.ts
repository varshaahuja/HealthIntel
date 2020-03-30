import { Component, OnInit } from '@angular/core';
import { LocalStorageService, Message } from '../local-storage.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue:string;

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
    this.messages = this.localStorageService.conversation.asObservable()
    .pipe( scan((acc, val) => acc.concat(val)))

    }

  sendMessage(){
    this.localStorageService.converse(this.formValue);
    this.formValue='';
  }

}
