import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { DeviceStrength } from '../.class/device.strength'
import { DeviceStamina } from '../.class/device.stamina'
import { HttpService } from '../http.service';

type Post = { strength: Array<DeviceStrength>, stamina: Array<DeviceStamina> };

@Component({
  selector: 'app-stamina',
  templateUrl: './stamina.component.html',
  styleUrls: ['./stamina.component.css']
})
export class StaminaComponent{

  imgURL: string = "../../assets/img/bild.png";
  stamina: Array<DeviceStamina> = [];

  constructor(private http: HttpService){
    this.stamina = this.http.Stamina;
  }
}
