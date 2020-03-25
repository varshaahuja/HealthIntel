import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  questions:any;

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.httpClient.get('/assets/data/questions.json').subscribe(data =>{
      this.questions = data;
    })
  }

}
