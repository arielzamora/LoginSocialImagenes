import { Component, OnInit } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/auth';
import {auth}from 'firebase/app';
import {Router}from '@angular/router';
import { AuthService }from '../../../servicios/auth.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string;
  public pass:string;

  constructor(public afAuth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onLogin():void{
    this.afAuth.loginEmailUser(this.email,this.pass)
    .then((res)=>{
      this.onLoginRedirect();
    }).catch(err=>console.log('err',err.Message));
  }

  onLoginGoogle():void
  {
    this.afAuth.loginGoogleUser().then((res)=>{
      this.onLoginRedirect();
    }).catch(err=>console.log('err',err.Message));
   
  }

  onLoginFacebook():void
  {
    this.afAuth.loginFacebookUser().then((res)=>{
     this.onLoginRedirect();
    }).catch(err=>console.log('err',err.Message));
  }
  onLogout():void
  {
    this.afAuth.logoutUser();
  }

  onLoginRedirect():void{
    this.router.navigate(['admin/list-books']);
  }
  
  onLoginErrorMensaje():void{

  }
}
