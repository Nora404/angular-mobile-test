import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';


type Post = { strength: Array<Strength>, stamina: Array<Stamina> };
type Strength = { shortcut: string, name: string, image: string, 
                  weightRange: { start: number, end: number, steps: number }};
type Stamina  = { shortcut: string, name: string, image: string };


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  imgURL: string = "../../assets/img/bild.png";
  strength: Array<Strength> = [];
  stamina: Array<Stamina> = [];

  constructor(private http: HttpClient) { }

  // Klappt nicht
  getStrength(){
    const post$: Observable<Post> = this.http.get<Post>('/assets/json/device.JSON');

    post$.subscribe((post)=>{
      this.strength = post.strength;
    });

    return this.strength;
  }
}
