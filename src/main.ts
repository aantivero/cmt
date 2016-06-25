import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  //Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyAVpIqYpetwJi3i87kKCwv72TEXBKDaa5Y",
    authDomain: "project-3608165319188981417.firebaseapp.com",
    databaseURL: "https://project-3608165319188981417.firebaseio.com",
    storageBucket: "project-3608165319188981417.appspot.com"
  })
]);

