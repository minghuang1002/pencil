import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService, public db: AngularFireDatabase) {}
  
  update(value){
    return this.db.list('text').update(value);
  }
  
}