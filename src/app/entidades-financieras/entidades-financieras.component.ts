import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-entidades-financieras',
  templateUrl: 'entidades-financieras.component.html',
  styleUrls: ['entidades-financieras.component.css']
})
export class EntidadesFinancierasComponent implements OnInit {

  entidades: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.entidades = af.database.list('/entidadesfinancieras');
  }

  add(codigo: string, denominacion: string){
    this.entidades.push({codigo: codigo, denominacion: denominacion});
  }

  update(key: string, codigo: string, denominacion: string){
    this.entidades.update(key, {codigo: codigo, denominacion: denominacion});
  }

  delete(key: string){
    this.entidades.remove(key);
  }

  deleteAll(){
    this.entidades.remove();
  }

  ngOnInit() {
  }

}
