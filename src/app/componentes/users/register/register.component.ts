import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {Router}from '@angular/router';
import { AuthService }from '../../../servicios/auth.service';
import {AngularFireStorage}from '@angular/fire/storage';
import {finalize}from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public afAuth:AuthService,private router:Router,private fireStore:AngularFireStorage) { }
 
   @ViewChild('imageUser',{static:true}) inputImageUser:ElementRef;
   public email:string ='';
   public password:string ='';

   uploadPercent: Observable<number>;
   urlImage:Observable<string>;


  ngOnInit() {
  }
  onAddUser()
  {
    this.afAuth.registerUser(this.email,this.password)
    .then((res)=>{
      
       this.afAuth.isAuth().subscribe(user=>{
        if(user){
          user.updateProfile({
            displayName:'',
            photoURL:this.inputImageUser.nativeElement.value
          }).then(()=>{
            this.router.navigate(['admin/list-books'])
          }).catch((error)=>console.log('error',error));
        }
       });    
    }).catch(err=> console.log('err',err.message))
  }


  onUpload(e)
  {
    //creamos un id aleatorio para poder asociarlo a la imagen
    const id = Math.random().toString(36).substring(2);
    const file=e.target.files[0];
    const filePath = 'uploads/profile_'+id;
    const ref=this.fireStore.ref(filePath);
    const task=this.fireStore.upload(filePath,file)
    this.uploadPercent=task.percentageChanges();//recuperamos el porcentaje de carga del archivo
    task.snapshotChanges().pipe(finalize(()=>this.urlImage=ref.getDownloadURL())).subscribe();
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

}
