import { Injectable } from '@angular/core';
import { Observable, startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer = new Subject<number>();
  private interval: any;

  runTimer: boolean = false;

  getTimer(): Observable<number>{
    return this.timer.asObservable();
  }

  toggleTimer(duration: number): boolean{
    let timer = duration;
    
    if(!this.runTimer){
      this.runTimer = true;

      this.interval = setInterval(()=>{
        if(timer <= 0){
          this.runTimer = false;
          clearInterval(this.interval);
          this.timer.complete;  
        } 
        this.timer.next(timer);
        timer--;
      }, 1000);
    

    } else {
      this.runTimer = false;
      this.timer.next(0);
      clearInterval(this.interval);
    } 

  
    return this.runTimer;
  }
  
}
