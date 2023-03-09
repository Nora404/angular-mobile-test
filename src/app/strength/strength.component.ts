import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DeviceStrength } from '../.class/device.strength'
import { DeviceStamina } from '../.class/device.stamina'

type Post = { strength: Array<DeviceStrength>, stamina: Array<DeviceStamina> };

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})

export class StrengthComponent implements OnDestroy{

  imgURL: string = "../../assets/img/bild.png";
  strength: Array<DeviceStrength> = [];

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
