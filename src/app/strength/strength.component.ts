import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http.service';


type Post = { strength: Array<Strength>, stamina: Array<Stamina> };
type Strength = { shortcut: string, name: string, image: string, 
                  weightRange: { start: number, end: number, steps: number }};
type Stamina  = { shortcut: string, name: string, image: string };

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})

export class StrengthComponent implements OnDestroy{

  imgURL: string = "../../assets/img/bild.png";
  strength: Array<Strength> = [];

  constructor(http: HttpClient){
    const post$: Observable<Post> = http.get<Post>('/assets/json/device.JSON');

    this.subscribe = post$.subscribe((post)=>{
      this.strength = post.strength;
    });
  }

  subscribe: Subscription;
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
