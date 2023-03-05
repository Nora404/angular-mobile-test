import { Component, OnInit } from '@angular/core';
import device  from '../../assets/json/device.json';

@Component({
  selector: 'app-stamina',
  templateUrl: './stamina.component.html',
  styleUrls: ['./stamina.component.css']
})
export class StaminaComponent implements OnInit{
  json: any = device.stamina;
  imgURL: string = "../../assets/img/bild.png";

  ngOnInit(): void {

  }
}
