import { Injectable } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/auth';
import { map }from 'rxjs/operators';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import  {UserInterface}from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth,private afs:AngularFirestore) { 

  }


  registerUser(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData =>{
         resolve(userData),
         this.updateUserData(userData.user)
        }).catch(err=>console.log(reject(err)))

    })
  }

  loginEmailUser(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }
  loginFacebookUser(){
   return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
   .then((credential)=>{
     this.updateUserData(credential.user);
   });
  }

  loginGoogleUser(){
  return  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  .then((credential)=>{
    this.updateUserData(credential.user);
  });
  }

  logoutUser(){
   return this.afAuth.auth.signOut();
  }

  isAuth()
  {
    return this.afAuth.authState.pipe(map(auth=>auth));
  }

  private updateUserData(user)
  {
    const userRef:AngularFirestoreDocument<any>= this.afs.doc('users/'+user.uid);
    const data :UserInterface = {
      id:user.uid,
      email:user.email,
      roles:{
        editor:true
      }
    }
    return userRef.set(data,{merge:true});
  }

  isUserAdmin(userUid){
    return this.afs.doc<UserInterface>('users/'+userUid).valueChanges();
  }
}
