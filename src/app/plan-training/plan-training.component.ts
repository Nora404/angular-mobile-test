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
  allTainingPlans: string[] | null = null; // null ist sinnvol weil hiermit auch content aktiviert wird

  constructor(private http: HttpService){
    this.training = http.Training;
  }

  getTrainingName(){
    return this.training.name;
  }

  getTrainingType(training: Training){
    return training.training === "strength" ? "Gewicht" : "Zeit";
  }

  handleNew(){
    console.log("Neuer Plan");
  }

  // TRAINING PLAN ----------------------------------------------------------------------------------------------------

  // TODO Aktualisieren der Seite / Feedback funktioniert nicht 
  changeTrainingPlan(){
    this.allTainingPlans = this.http.Plans.map(plan => plan.name);
    // this.training = this.http.Training;
  }
  aktivatePlan(plan: string){
    this.http.changeConfigData("training", plan);
    this.training = this.http.Training;
  }

}
