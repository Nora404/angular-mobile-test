import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { DialogTwoButtonsComponent } from '../utilities/dialog-two-buttons/dialog-two-buttons.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  name: string;
  training: string;
  allTainingPlans: string[] | null = null; // null ist sinnvol weil hiermit auch content aktiviert wird
  lastTrainingDate: String;

  @ViewChild('dialog') dialog: DialogTwoButtonsComponent = new DialogTwoButtonsComponent;
  hidden: string = "hidden";
  dialogFunktion: Function = this.dialogResetData.bind(this);

  constructor(private http: HttpService){
    this.name = http.Config.name;
    this.training = http.Config.training;
    this.lastTrainingDate = "kommt noch";
  }

// RESET DATA ----------------------------------------------------------------------------------------------------

  resetData(){
    this.dialog.title = "Daten zurück setzten";
    this.dialog.message = "Alle Daten werden gelöscht. Bist du dir sicher?";  
    this.hidden = "";

    this.dialogFunktion = this.dialogResetData.bind(this);
  }
  dialogResetData(){
    this.http.resetData();
    console.log("Daten zurück gesetzt");
  }

// BREAKE TIME ----------------------------------------------------------------------------------------------------
  
  changeBreakeTime(){
    let time = this.http.Config.break === 30 ? 45 : 30;

    this.dialog.title = "Pausenzeit ändern?";
    this.dialog.message = "Die Pause wird von " + this.http.Config.break + "sec auf " + time + "sec geändert";  
    this.hidden = "";

    this.dialogFunktion = this.dialogBreakeTime.bind(this);
  }
  dialogBreakeTime(){
    let time = this.http.Config.break === 30 ? 45 : 30;
    this.http.changeConfigData("break", time);
    console.log("Pausenzeit wurde geändert");
  }

// TRAINING PLAN ----------------------------------------------------------------------------------------------------

  changeTrainingPlan(){
    this.allTainingPlans = this.http.Plans.map(plan => plan.name);
  }
  aktivatePlan(plan: string){
    this.http.changeConfigData("training", plan);
    this.training = this.http.Config.training;
  }
  editPlan(plan: string){
    console.log(plan);
  }

// EVENT HANDLER ----------------------------------------------------------------------------------------------------

  handleDialog(result: string){
    if(result === "ok"){
      this.dialogFunktion();
    }
    this.hidden = "hidden";
  }

}
