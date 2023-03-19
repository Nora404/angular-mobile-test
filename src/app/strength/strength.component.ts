import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DeviceStrength } from '../.class/device.strength'
import { DeviceStamina } from '../.class/device.stamina'
import { HttpService } from '../http.service';

type Post = { strength: Array<DeviceStrength>, stamina: Array<DeviceStamina> };

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})

export class StrengthComponent{

  imgURL: string = "../../assets/img/";
  strength: Array<DeviceStrength> = [];
  active: string = "body" || "body";

  constructor(private http: HttpService){
    this.strength = this.http.Strength;
   }

  createURL(name: string): string{
    return this.imgURL + name;
  }

  filterArray(name: string): Array<DeviceStrength>{
    return this.strength.filter(item=> item.trained === name);
  }
}
