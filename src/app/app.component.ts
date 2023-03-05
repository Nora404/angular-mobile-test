import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs';
import { merge } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'training';
  header: string = 'Hallo Welt';


/*
  getObservables() {
    const mouseDowns = fromEvent<MouseEvent>(document, "mousedown").pipe(map((e)=>this.mouseEventToCoordinate(e)));
    const mouseMoves = fromEvent<MouseEvent>(window, "mousemove").pipe(map((e)=>this.mouseEventToCoordinate(e)));
    const mouseUps = fromEvent<MouseEvent>(window, "mouseup").pipe(map((e)=>this.mouseEventToCoordinate(e)));
  
    const touchStarts = fromEvent<TouchEvent>(document, "touchstart").pipe(map((e)=>this.touchEventToCoordinate(e)));
    const touchMoves = fromEvent<TouchEvent>(document, "touchmove").pipe(map((e)=>this.touchEventToCoordinate(e)));
    const touchEnds = fromEvent<TouchEvent>(window, "touchend").pipe(map((e)=>this.touchEventToCoordinate(e)));
  
    const starts = merge(touchStarts, mouseDowns);
    const moves = merge(touchMoves, mouseMoves);
    const ends = merge(touchEnds, mouseUps);
  
    return { starts, moves, ends };
  }

  mouseEventToCoordinate (mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();
    return {
      x: mouseEvent.clientX, 
      y: mouseEvent.clientY,
    };
  };

  touchEventToCoordinate (touchEvent: TouchEvent) {
    touchEvent.preventDefault();
    return {
      x: touchEvent.changedTouches[0].clientX, 
      y: touchEvent.changedTouches[0].clientY,
    };
  };
*/
  
  ngOnInit(): void {
    //this.getObservables().starts.subscribe((event: any) => {
    //  console.log('Moved to ', event);    
    //  this.coordinate = event.x + " " + event.y;
    //});
  }



  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  handleMenu(){
    this.header = "Hallo Welt";
  }

  handleStart(){
    this.header = "Training läuft";
  }

  handlePlan(){
    this.header = "Training planen";
  }
  
  handleStrength(){
    this.header = "Geräte Liste";
  }
  
  handleStamina(){
    this.header = "Ausdauer Liste";
  }
  
  handleProfil(){
    this.header = "Deine Daten";
  }
}
