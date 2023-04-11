import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeviceStrength } from './.class/device.strength';
import { DeviceStamina } from './.class/device.stamina';
import { Config, DefaultConfig } from './.class/config'
import { DefaultPlan, Plan } from './.class/plan';

type DeviceJSON = { strength: Array<DeviceStrength>, stamina: Array<DeviceStamina> };
type PlanJSON = { plan: Array<Plan> };
type DataConfig = "name" | "break" | "training";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  config: Config;
  training: Array<Plan> = [];
  strength: Array<DeviceStrength> = [];
  stamina: Array<DeviceStamina> = [];

// //////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { 
    this.config = new DefaultConfig();

    this.initConfig();
    this.initDevices();    
    this.initTraining();    
  }

// //////////////////////////////////////////////////////////////////////////////////////////////////

  initConfig(){
    const post$: Observable<Config> = this.http.get<Config>('/assets/json/config.JSON');
      // holt Daten, fals sie im Local Storage liegen
      let config: {post: Config} = JSON.parse(localStorage.getItem('config') || '');

      post$.subscribe((post)=>{
        // Wenn keine Daten da waren, sollen die Daten aus der Datei gespeichert werden
        if(!config){
          localStorage.setItem('config', JSON.stringify({post}));
        }
      });
      // Jetzt werden die Daten in die Memberdateien geladen
      config = JSON.parse(localStorage.getItem('config') || '');
      this.config = config.post;
  }

  initDevices(){
    const post$: Observable<DeviceJSON> = this.http.get<DeviceJSON>('/assets/json/device.JSON');
      // holt Daten, fals sie im Local Storage liegen
      let device: {post: DeviceJSON} = JSON.parse(localStorage.getItem('device') || '');

    post$.subscribe((post)=>{
      // Wenn keine Daten da waren, sollen die Daten aus der Datei gespeichert werden
      if(!device){
        localStorage.setItem('device', JSON.stringify({post}));
      }
    });
      // Jetzt werden die Daten in die Memberdateien geladen
      device = JSON.parse(localStorage.getItem('device') || '');
      this.strength = device.post.strength;  
      this.stamina = device.post.stamina;
  }

  initTraining(){
    const post$: Observable<PlanJSON> = this.http.get<PlanJSON>('/assets/json/plan.JSON');
      // holt Daten, fals sie im Local Storage liegen
      let plan: {post: PlanJSON} = JSON.parse(localStorage.getItem('plan') || '');

      post$.subscribe((post)=>{
        // Wenn keine Daten da waren, sollen die Daten aus der Datei gespeichert werden
         if(!plan){
           localStorage.setItem('plan', JSON.stringify({post}));
         }
      });
      // Jetzt werden die Daten in die Memberdateien geladen
      plan = JSON.parse(localStorage.getItem('plan') || '');
      
      this.training = plan.post.plan;
  }

  resetData(){
    const config$: Observable<Config> = this.http.get<Config>('/assets/json/config.JSON');
    const device$: Observable<DeviceJSON> = this.http.get<DeviceJSON>('/assets/json/device.JSON');
    const plan$: Observable<PlanJSON> = this.http.get<PlanJSON>('/assets/json/plan.JSON');

    config$.subscribe((post)=>{
        localStorage.setItem('config', JSON.stringify({post}));
    });

    device$.subscribe((post)=>{
      localStorage.setItem('device', JSON.stringify({post}));
    });

    plan$.subscribe((post)=>{
      localStorage.setItem('plan', JSON.stringify({post}));
    });

    let config = JSON.parse(localStorage.getItem('config') || '');
    let device = JSON.parse(localStorage.getItem('device') || '');
    let plan = JSON.parse(localStorage.getItem('plan') || '');
    
    this.training = plan.post;
    this.strength = device.post.strength;  
    this.stamina = device.post.stamina;
    this.config = config.post;    
  }

// //////////////////////////////////////////////////////////////////////////////////////////////////

changeConfigData(data: DataConfig, value: any){
  let post = this.config;

  switch (data) {
    case "name":
      post.name = value;    
      break;
    case "break":
      post.break = value;    
      break;
    case "training":
      post.training = value;    
      break;
    
    default:
      console.log("no change");
      break;
  }
  localStorage.setItem('config', JSON.stringify({post}));
  this.config = post;
}


// //////////////////////////////////////////////////////////////////////////////////////////////////

  get Config(): Config{
    return this.config;
  }

  get Strength(): Array<DeviceStrength>{
    return this.strength;
  }

  get Stamina(): Array<DeviceStamina>{
    return this.stamina;
  }

  get Plans(): Plan[]{
    return this.training;
  }

  get Training(): Plan{
    let configPlan = this.config.training;
    let plan = this.training.filter(plan => plan.name === configPlan);
  
    return plan[0] || null;
  }
}
