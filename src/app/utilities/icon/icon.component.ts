import { Component, Input, OnInit } from '@angular/core';

type IconNames = "add" | "cancel" | "delete" | "error" | "settings" | "smile" | "yes"
               | "arrow_down" | "arrow_left" | "arrow_right" | "arrow_up"
               | "double_arrow_down" | "double_arrow_left" | "double_arrow_right" | "double_arrow_up"
               | "change" | "help" | "play" | "swap" | "pause" | "stop"
               | "account" | "pending" | "note";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  @Input() name: IconNames = "smile";
  @Input() color: string = "gray";
  
  url: string = "../../../assets/img/icons/" + this.name + ".png";
           
  ngOnInit(){
    this.url = "../../../assets/svg/" + this.name + ".svg"
  }         
}
