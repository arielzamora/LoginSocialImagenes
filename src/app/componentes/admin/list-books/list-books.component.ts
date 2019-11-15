import { Component, OnInit } from '@angular/core';
import {DataApiService}from '../../../servicios/data-api.service'
import {BookInterface}from '../../../model/book';
import {NgForm}from '@angular/forms';
import {AuthService}from '../../../servicios/auth.service';
import {AngularFireAuth}from '@angular/fire/auth';
import {UserInterface}from '../../../model/user';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataApi:DataApiService,private authService:AuthService) { }
 
  private books=[];
  public isAdmin:any=null;
  public userUid:string=null;

  ngOnInit() {
    this.getListBooks();
    this.getCurrentUser();
  }
   
  getCurrentUser()
  {
     this.authService.isAuth().subscribe(auth =>
      {
        if(auth)
        {
          this.userUid=auth.uid;
          this.authService.isUserAdmin(this.userUid).subscribe(userRole=>{
            this.isAdmin=Object.assign({},userRole.roles).hasOwnProperty('admin');
          });
        }
      });
  }

  getListBooks(){
    this.dataApi.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }

  onDeleteBook(idBook:string){
        
    const confirmacion = confirm('estas seguro de eliminar');
    
    if(confirmacion)
    {
      this.dataApi.deleteBook(idBook);
    }
    

  }
  onPreUpdateBook(book: BookInterface)
  {
    this.dataApi.selectedBook=Object.assign({},book);
  }
}
