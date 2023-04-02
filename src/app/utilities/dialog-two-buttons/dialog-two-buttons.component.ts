import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-two-buttons',
  templateUrl: './dialog-two-buttons.component.html',
  styleUrls: ['./dialog-two-buttons.component.css']
})
export class DialogTwoButtonsComponent {

  @Input() title: string = "Dialog";
  @Input() message: string = "Hallo Welt";
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  confirm(){
    this.confirmed.emit();
  }

  cancel(){
    this.cancelled.emit();
  }
}
