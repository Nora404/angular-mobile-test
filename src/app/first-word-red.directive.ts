import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[firstWordRed]'
})
export class FirstWordRedDirective implements AfterViewInit{

  constructor(private el: ElementRef) { 
  }

  ngAfterViewInit(): void {

    const text = this.el.nativeElement.textContent.trim();
    const firstWord = text.split(' ')[0];
    const restText = text.slice(firstWord.length);

    this.el.nativeElement.innerHTML = `<span style="color: darkred">${firstWord}</span>${restText}`;
  }
}
