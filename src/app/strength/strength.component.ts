import { Component, OnInit } from '@angular/core';
import device  from '../../assets/json/device.json';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit{
  json: any = device.strength;
  imgURL: string = "../../assets/img/bild.png";

  ngOnInit(): void {

  }
  
}
