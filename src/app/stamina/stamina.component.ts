import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, Subscription } from 'rxjs';

// Aufbau des JSON, so weiß das Programm wie es damit umgehen soll
type Post = { strength: Array<Strength>, stamina: Array<Stamina> };
type Strength = { shortcut: string, name: string, image: string, 
                  weightRange: { start: number, end: number, steps: number }};
type Stamina  = { shortcut: string, name: string, image: string };

@Component({
  selector: 'app-stamina',
  templateUrl: './stamina.component.html',
  styleUrls: ['./stamina.component.css']
})
export class StaminaComponent implements OnDestroy{

  imgURL: string = "../../assets/img/bild.png";
  stamina: Array<Stamina> = [];

  constructor(http: HttpClient){
    const post$: Observable<Post> = http.get<Post>('/assets/json/device.JSON');

    this.subscribe = post$.subscribe((post)=>{
      this.stamina = post.stamina;
    });
  }

  subscribe: Subscription;
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
