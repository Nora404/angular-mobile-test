import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { merge } from 'rxjs';
import { fromEvent } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title: string = 'training';
  header: string = 'Hallo Welt';

  constructor(private http: HttpService){}


  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  handleMenu(){
    this.header = "Hallo Welt";
  }

  handleStart(){
    this.header = "Training läuft";
  }

  handlePlan(){
    this.header = "Training planen";
  }
  
  handleStrength(){
    this.header = "Geräte Liste";
  }
  
  handleStamina(){
    this.header = "Ausdauer Liste";
  }
  
  handleProfil(){
    this.header = "Deine Daten";
  }
}
