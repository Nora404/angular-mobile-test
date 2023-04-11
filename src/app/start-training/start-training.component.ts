import { Component, ViewChild} from '@angular/core';
import { TimerService } from '../timer.service';
import { Observable} from 'rxjs';
import { Plan } from '../.class/plan'
import { HttpService } from '../http.service';
import { DefaultTraining, Training } from '../.class/training';
import { DialogTwoButtonsComponent } from '../utilities/dialog-two-buttons/dialog-two-buttons.component';

@Component({
  selector: 'app-start-training',
  templateUrl: './start-training.component.html',
  styleUrls: ['./start-training.component.css']
})
export class StartTrainingComponent{

  timer$: Observable<number>;
  training : Plan;
  
  trainingPlaying: boolean = false;
  currentTraining: Training = new DefaultTraining;
  countTraining: number = 0;

  @ViewChild('dialog') dialog: DialogTwoButtonsComponent = new DialogTwoButtonsComponent;
  hidden: string = "hidden";

// -------------------------------------------------------------------------------------------------------------  

  constructor(private timerService: TimerService, 
              private http: HttpService){
    
    this.timer$ = this.timerService.Timer;
    this.training = this.http.Training;
  }

  // -------------------------------------------------------------------------------------------------------------  

  get StrenghtPlan(): Array<Training>{
    return this.training.plan.filter(item=>item.training ==='strength');
  }

  get StaminaPlan(): Array<Training>{
    return this.training.plan.filter(item=>item.training ==='stamina');
  }

  get StretchingPlan(): Array<Training>{
    return this.training.plan.filter(item=>item.training ==='stretching');
  }

  getTrainingType(training: Training | null){
    if(!training){
      return "";
    }
    return training.training === "strength" ? "Gewicht" : "Minuten";
  }

// -------------------------------------------------------------------------------------------------------------  

  handleTimer(){
    let time = this.http.Config.break;
    this.timerService.toggleTimer(time);
  }

  handleTraining(){
    if(!this.trainingPlaying){
      this.trainingPlaying = true;
      this.currentTraining = this.StaminaPlan[0] || this.StrenghtPlan[0] || this.StretchingPlan[0];
  
      console.log("start...");
      this.countTraining = this.training.plan.length;
    } 
    
    else {
      this.trainingPlaying = false;
      console.log("stop...");
    }
  }

// -------------------------------------------------------------------------------------------------------------  

  handelDoubleDown(){
    console.log("double down...");    
  }
  handelDown(){
    console.log("down...");    
  }
  handelYes(){
    this.dialog.title = "Passt genau!";
    this.dialog.message = "An den Einstellungen muss nix geändert werden.";  
    this.hidden = "";

    this.countTraining--;
    console.log("yes...");    
  }
  handelUp(){
    console.log("up...");    
  }
  handelDoubleUp(){
    console.log("double up...");    
  }

// -------------------------------------------------------------------------------------------------------------  

  test($event: string){
    console.log($event);
    this.hidden = "hidden";
  }
}


