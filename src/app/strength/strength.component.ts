import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Aufbau des JSON, so weiß das Programm wie es damit umgehen soll
type Post = { strength: Array<Strength>, stamina: Array<Stamina> };
type Strength = { shortcut: string, name: string, image: string, 
                  weightRange: { start: number, end: number, steps: number }};
type Stamina  = { shortcut: string, name: string, image: string };

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})

export class StrengthComponent {
  // Später soll "bild.png" gegen image aus der JSON ersetzt werden
  imgURL: string = "../../assets/img/bild.png";

  // Aus dem JSON wird hier nur das gespeichert, was ich in dieser Komponente brauche
  strength: Array<Strength> = [];

  constructor(http: HttpClient){
    // Dieser Observable holt das JSON aus der Datei...
    const post$: Observable<Post> = http.get<Post>('/assets/json/device.JSON');

    // ...Das Abo des Observables steckt den gesendeten Inhalt in die Membervariable
    post$.subscribe((post)=>{
      this.strength = post.strength;
    });
  }
}
