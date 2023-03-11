import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Training } from '../.class/training'
import { Plan } from '../.class/plan'

type Post = { plan: Array<Training> };

@Component({
  selector: 'app-plan-training',
  templateUrl: './plan-training.component.html',
  styleUrls: ['./plan-training.component.css']
})
export class PlanTrainingComponent implements OnDestroy{

  plan : Array<Training> = [];

  constructor(http: HttpClient){
    const post$: Observable<Plan> = http.get<Plan>('/assets/json/training.JSON');

    this.subscribe = post$.subscribe((post)=>{
      this.plan = post.plan;
    });
  }

  subscribe: Subscription;
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

  getTrainingType(training: Training){
    return training.training === "strength" ? "Gewicht" : "Zeit";
  }

  handleNew(){

  }
}
