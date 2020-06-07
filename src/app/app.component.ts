import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase, AngularFireObject  } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  retrieveVal: AngularFireObject<any>;
  constructor(public auth: AuthService, public db: AngularFireDatabase) {
    this.itemRef = db.object('text');
    this.item = this.itemRef.valueChanges();
  }

  updateData(newText: string) {
    console.log(newText);
    this.itemRef.update({ text: newText });
  }

}