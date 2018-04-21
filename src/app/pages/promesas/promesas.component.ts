import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contar3().then(
      (result) => {
        console.log('Terminó', result);
      }
    ).catch(
      (error) => {
        console.error('Error en la promesa', error);
      }
    );
  }

  ngOnInit() {
  }

  contar3(): Promise<string> {
    return new Promise(
      (resolve, reject) => {
        let contador = 0;
        const intervalo = setInterval(
          () => {
            contador += 1;
            console.log(contador);
            if (contador === 3) {
              clearInterval(intervalo);
              // resolve('OK!');
              reject('Esto es un errrorrrr');
            }
          },
          1000
        );
      }
    );
  }

}
