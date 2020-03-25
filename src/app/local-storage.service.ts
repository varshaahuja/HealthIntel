import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private httpClient:HttpClient){}
  
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

}
