import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable, BehaviorSubject } from 'rxjs';




export class Message {
  constructor(public content:string, public sentBy:string){}
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private httpClient:HttpClient){}

 readonly token = '27526fb3d0bd44cf85ee268b4c758ee7';

  readonly client = new ApiAiClient({accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);
  

  talk(){
    this.client.textRequest('Who are you !')
      .then((res)=>{
        console.log(res);
      })
  }

  update(msg:Message){
    this.conversation.next([msg]);
  }

  converse(msg:string){
    const userMessage = new Message(msg,'You');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then((res)=>{
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'Bot')
        this.update(botMessage);
      })
  }


  getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  }

  getRole = ()=>{
    return JSON.parse(localStorage.getItem('role'));
  }

  setUser = (user: any) => {
    localStorage.user = JSON.stringify(user);
  }

  setRole = (role:any)=>{
    localStorage.role = JSON.stringify(role);
  }

  clearAll = () => {
    localStorage.clear();
  }

  getAllUsers = ()=> {
    
   return this.httpClient.get('/assets/data/users.json');
  }

  getAllEvents(){
    return this.httpClient.get('/assets/data/events.json');
  }

  getAllInsurance(){
    return this.httpClient.get('/assets/data/insurance.json');
  }

  getAllFaq(){
    return this.httpClient.get('/assets/data/faqs.json')
  }

  getAllQuestions(){
    return this.httpClient.get('/assets/data/questions.json');
  }

  getAllAppointments(){
    return this.httpClient.get('/assets/data/appointments.json');
  }

  getAllNews(){
    return this.httpClient.get('/assets/data/news.json');
  }

}
