import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { DeviceStrength } from '../.class/device.strength'
import { DeviceStamina } from '../.class/device.stamina'

type Post = { strength: Array<DeviceStrength>, stamina: Array<DeviceStamina> };

@Component({
  selector: 'app-stamina',
  templateUrl: './stamina.component.html',
  styleUrls: ['./stamina.component.css']
})
export class StaminaComponent implements OnDestroy{

  imgURL: string = "../../assets/img/bild.png";
  stamina: Array<DeviceStamina> = [];

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
