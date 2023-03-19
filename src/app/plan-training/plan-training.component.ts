import { Component } from '@angular/core';
import { Training } from '../.class/training'
import { Plan } from '../.class/plan'
import { HttpService } from '../http.service';

type Post = { plan: Array<Training> };

@Component({
  selector: 'app-plan-training',
  templateUrl: './plan-training.component.html',
  styleUrls: ['./plan-training.component.css']
})
export class PlanTrainingComponent{

  training : Plan;

  constructor(http: HttpService){
    this.training = http.Training;
  }


  getTrainingType(training: Training){
    return training.training === "strength" ? "Gewicht" : "Zeit";
  }

  handleNew(){
    console.log("Neuer Plan");
  }
}
