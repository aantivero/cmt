import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {EntidadesFinancierasComponent} from './entidades-financieras/entidades-financieras.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[
    EntidadesFinancierasComponent
  ]
})
export class AppComponent {
  title = 'Cash Management Tool';
  items: FirebaseListObservable<any>;
  
  constructor(af: AngularFire){
    this.items = af.database.list('/messages');
  }

  add(newName: string ){
    this.items.push({value: newName});
  }
  update(key: string, newSize: string) {
    this.items.update(key, {size: newSize});
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything(){
    this.items.remove();
  }
}
