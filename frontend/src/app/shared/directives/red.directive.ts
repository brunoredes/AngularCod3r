import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})

/*
diretiva de atributos:
  pode mexer tanto no comportamento quanto no estilo de um componente
*/
export class RedDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = '#e35e6b'
  }

}
