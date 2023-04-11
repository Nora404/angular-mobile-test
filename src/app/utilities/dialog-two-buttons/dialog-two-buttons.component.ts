import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
 --- Anleitung für den Dialog ---
______________________________________________________________________________________________________
 --- Einbinden in der Elternkomponente ---
    <app-dialog-two-buttons (choice)="test($event)" #dialog class="{{hidden}}">

    (choice) ist die button Funktion in dieser Dialog-Komponente.
    Sie schickt das Event des geklickten Button zurück zur Eltern-Komponente

    test($event) ist die Funktion in der Elternkomponente.
    Das was sie bekommt ist ein String der von den Buttons dieses Templates verschickt wird
    Der String gibt mit "ok" und "cancel" an, welcher Button geklickt wurde.

      test($event: string){
        console.log($event);
        this.hidden = "hidden";
      }
______________________________________________________________________________________________________
 --- Einstelung in der Elternkomponente ---

      @ViewChild('dialog') dialog: DialogTwoButtonsComponent = new DialogTwoButtonsComponent;
      hidden: string = "hidden";

      Mit hidden wird die Klasse hidden eingebunden, solange der Dialog inaktiv ist.
      Wird der Butten der Elternklasse für den Dialog geklickt, muss hidden auf "" gesetzt werden
      Zudem wird dann der Titel und die Message eingestellt

        handelYes(){
          this.dialog.title = "Titel des Dialogs";
          this.dialog.message = "Die Messages des Dialogs";  
          this.hidden = "";
        }
______________________________________________________________________________________________________
 --- Mehrere Dialoge in einer Komponente ---

      Die Elternkomponente braucht eine weitere Variable inder eine Funktion gespeichert ist
        dialogFunktion: Function = this.dialog1.bind(this);
      
      Die Funktion welche beim Klick ausgeführt wird löst diese Funktion aus   
          test(test: string){
            if(test === "ok"){
              this.dialogFunktion();
            }
            this.hidden = "hidden";
          }

      Jeder Button der einen Dialog öffnen soll muss in seiner Funktion der dialogFunktion
      die passende Funktion zuweisen, genau wie Titel und Message    

*/


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
