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

  imgURL: string = "../../assets/img/";
  strength: Array<DeviceStrength> = [];
  active: string = "body" || "body";

  constructor(http: HttpClient){
    const post$: Observable<Post> = http.get<Post>('/assets/json/device.JSON');

    this.subscribe = post$.subscribe((post)=>{     
      localStorage.setItem('device', JSON.stringify({post}));
    });
  
    let device: {post: Post} = JSON.parse(localStorage.getItem('device') || '');
    this.strength = device.post.strength;    
  }

  createURL(name: string): string{
    return this.imgURL + name;
  }

  filterArray(name: string): Array<DeviceStrength>{
    return this.strength.filter(item=> item.trained === name);
  }

  subscribe: Subscription;
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

}
