import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private httpClient:HttpClient ) { }

  news:any;
  newScroll:any
  i:any
  
  ngOnInit() {
    this.getAllNews();
  }

  getAllNews(){
    this.httpClient.get('/assets/data/news.json').subscribe(data =>{
      this.news = data[0];
    })
  }

}
