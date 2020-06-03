import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC7C61s1A66V-f6JPQ6r-ZuP_Dbx3sQgr4",
  authDomain: "pencilfire-83607.firebaseapp.com",
  databaseURL: "https://pencilfire-83607.firebaseio.com",
  projectId: "pencilfire-83607",
  storageBucket: "pencilfire-83607.appspot.com",
  messagingSenderId: "331887633672",
  appId: "1:331887633672:web:d962387bff53291d9f38bd"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
