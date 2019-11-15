import { Component, OnInit } from '@angular/core';
import {DataApiService}from '../../servicios/data-api.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books=[];
  public book='';
  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.dataApi.getAllBooks().subscribe(books =>{
        console.log("books",books);
        this.books=books;
      });
  }

}
