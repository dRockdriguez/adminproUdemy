import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtProgress: ElementRef;
  @Input() leyenda: string = '';
  @Input() progreso: number = 20;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  cambiaValor(valor: number) {
    if (this.progreso + valor >= 100) {
      this.progreso = 100;
    } else if (this.progreso + valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = this.progreso + valor;
    }


    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChange(evento: number) {
    // const elemHTML = document.getElementsByName('progreso')[0];

    if (evento >= 100) {
      this.progreso = 100;
    } else if (evento <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = evento;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    
    this.cambioValor.emit(this.progreso);
  }
}
