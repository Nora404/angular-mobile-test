import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';
import { Observable, isEmpty } from 'rxjs';

@Component({
  selector: 'app-start-training',
  templateUrl: './start-training.component.html',
  styleUrls: ['./start-training.component.css']
})
export class StartTrainingComponent{

  timer$: Observable<number>;
  runTimer: boolean = false;

  constructor(private timerService: TimerService){
    this.timer$ = this.timerService.getTimer();
  }


  handleTimer(time: string = "30"){
    this.runTimer = this.timerService.toggleTimer(Number(time));
  }
}
