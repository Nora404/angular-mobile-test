import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-two-buttons',
  templateUrl: './dialog-two-buttons.component.html',
  styleUrls: ['./dialog-two-buttons.component.css']
})
export class DialogTwoButtonsComponent {

  @Input() title: string = "Dialog";
  @Input() message: string = "Hallo Welt";
  @Output() choice = new EventEmitter<string>();

// -------------------------------------------------------------------------  

  button(choice: string){
    this.choice.emit(choice);
  }
 
}
