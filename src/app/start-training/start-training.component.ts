import { Component, OnDestroy} from '@angular/core';
import { TimerService } from '../timer.service';
import { Observable, Subscription } from 'rxjs';
import { Training } from '../.class/training'
import { Plan } from '../.class/plan'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-training',
  templateUrl: './start-training.component.html',
  styleUrls: ['./start-training.component.css']
})
export class StartTrainingComponent implements OnDestroy{

  timer$: Observable<number>;
  name : string = "";
  frequency : string = "";
  speed : string = "";
  plan : Array<Training> = [];

  strength : Array<Training> = [];
  stamina : Array<Training> = [];

  constructor(private timerService: TimerService, http: HttpClient){
    this.timer$ = this.timerService.getTimer();

    const post$: Observable<Plan> = http.get<Plan>('/assets/json/training.JSON');

    this.subscribe = post$.subscribe(
      (post)=>{
      this.name = post.name;
      this.frequency = post.frequency;
      this.speed = post.speed
      this.plan = post.plan;

      },
      /*
      (err)=>{
        console.log(err);
      },
      ()=>{
        this.strength = this.plan.filter((item)=>{item.training === "strength"});
        this.stamina = this.plan.filter((item)=>{item.training === "stamina"});
  
        console.log(this.plan);
        console.log(this.strength);
        console.log(this.stamina);
      }
      */
    );
  }

  subscribe: Subscription;
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

  handleTimer(time: number = 30){
    this.timerService.toggleTimer(time);
  }

  handleTrainingStart(){
    
  }
}
