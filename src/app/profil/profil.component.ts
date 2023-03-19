import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  name: string;
  training: string;
  lastTraining: String;

  constructor(private http: HttpService){
    this.name = http.Config.name;
    this.training = http.Config.training;
    this.lastTraining = "kommt noch";
  }

  resetData(){
    this.http.resetData();
  }

  changeBreakeTime(){
    let time = this.http.Config.break === 30 ? 45 : 30;
    this.http.changeConfigData("break", time);
  }

  test(){
    console.log("test bestanden");
  }
}
