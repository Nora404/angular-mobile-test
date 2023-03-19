import { Component } from '@angular/core';
import { TimerService } from '../timer.service';
import { Observable } from 'rxjs';
import { Training } from '../.class/training'
import { Plan } from '../.class/plan'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-start-training',
  templateUrl: './start-training.component.html',
  styleUrls: ['./start-training.component.css']
})
export class StartTrainingComponent{

  timer$: Observable<number>;
  training : Plan;


  constructor(private timerService: TimerService, 
              private http: HttpService){
    
    this.timer$ = this.timerService.Timer;
    this.training = this.http.Training;
  }

  handleTimer(){
    let time = this.http.Config.break;
    this.timerService.toggleTimer(time);
  }

  handleTrainingStart(){
    console.log("start...");
    
  }
}
