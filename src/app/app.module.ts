import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './componentes/admin/list-books/list-books.component';
import { DetailsBookComponent } from './componentes/details-book/details-book.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { HomeComponent } from './componentes/home/home.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { OffersComponent } from './componentes/offers/offers.component';
import { ProfileComponent } from './componentes/users/profile/profile.component';
import { LoginComponent } from './componentes/users/login/login.component';
import { RegisterComponent } from './componentes/users/register/register.component';
import { Page404Component } from './componentes/page404/page404.component';
import {FormsModule}from '@angular/forms';
import {environment}from '../environments/environment';
//firestore y imagenes 
import {AngularFireModule}from '@angular/fire';
import {AngularFireDatabaseModule}from '@angular/fire/database';
import {AngularFireAuth}from '@angular/fire/auth';
import {AngularFireStorageModule}from '@angular/fire/storage';
import {AngularFirestore}from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    DetailsBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
