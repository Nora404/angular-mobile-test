import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

  config: Config = new DefaultConfig;
  training: Array<Plan> = [];
  strength: Array<DeviceStrength> = [];
  stamina: Array<DeviceStamina> = [];

// //////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private http: HttpClient) { 
    this.initConfig();
    this.initDevices();    
    this.initTraining();    
  }

// //////////////////////////////////////////////////////////////////////////////////////////////////

  initConfig(){
    const configString: string = localStorage.getItem('config') || '';
    
    if(configString){
        this.config =  JSON.parse(configString);
        
      } else {
        this.http.get<Config>('/assets/json/config.JSON').pipe(
          tap(value => {
            this.config = value;
            localStorage.setItem('config', JSON.stringify(value));
          })
        ).subscribe();
      }
  }

  initDevices(){
    const devicesString: string = localStorage.getItem('device') || '';
    
    if(devicesString){
        const devicesJSON: DeviceJSON = JSON.parse(devicesString);
        this.strength =  devicesJSON.strength;
        this.stamina = devicesJSON.stamina;

      } else {
        this.http.get<DeviceJSON>('/assets/json/device.JSON').pipe(
          tap(value => {
            this.strength = value.strength;
            this.stamina = value.stamina;
            localStorage.setItem('device', JSON.stringify(value));
          })
        ).subscribe();
      }
  }

  initTraining(){
    const planString: string = localStorage.getItem('plan') || '';
    
    if(planString){
        const planJson: Plan[]= JSON.parse(planString);
        this.training = planJson;
        
      } else {
        this.http.get<PlanJSON>('/assets/json/plan.JSON').pipe(
          tap(value => {
            this.training = value.plan;
            localStorage.setItem('plan', JSON.stringify(value.plan));
          })
        ).subscribe();
      }
  }

  resetData(){
    this.http.get<Config>('/assets/json/config.JSON').pipe(
      tap(value => {
        this.config = value;
        localStorage.setItem('config', JSON.stringify(value));
      })
    ).subscribe();

    this.http.get<DeviceJSON>('/assets/json/device.JSON').pipe(
      tap(value => {
        this.strength = value.strength;
        this.stamina = value.stamina;
        localStorage.setItem('device', JSON.stringify(value));
      })
    ).subscribe();

    this.http.get<PlanJSON>('/assets/json/plan.JSON').pipe(
      tap(value => {
        this.training = value.plan;
        localStorage.setItem('plan', JSON.stringify(value.plan));
      })
    ).subscribe();
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
    console.log(configPlan);
    
    let plan = this.training.filter(plan => plan.name === configPlan);
    console.log(plan);
    
  
    return plan[0] || new DefaultPlan;
  }
}
