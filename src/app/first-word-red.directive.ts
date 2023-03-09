import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[firstWordRed]'
})
export class FirstWordRedDirective implements OnChanges{

  @Input('firstWordRed') text: string = "";

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes){
      const firstWord = this.text.split(' ')[0];
      const restText = this.text.slice(firstWord.length);
  
      this.el.nativeElement.innerHTML = `<span style="color: darkred">${firstWord}</span>${restText}`;
    }
  }
}
