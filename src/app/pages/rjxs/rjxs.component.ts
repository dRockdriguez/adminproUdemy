import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styles: []
})
export class RjxsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      (numero) => {
        console.log(numero);
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('El observador termina...');
      }
    );
   }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable(
      observer => {
        let contador = 0;
        const intervalo = setInterval(
          () => {
            contador += 1;
            const salida = {
              valor: contador
            };
            observer.next( salida );

            /*if (contador === 3) {
              clearInterval(intervalo);
              observer.complete();
            }*/
           /* } else if (contador ===  2) {
              clearInterval(intervalo);
              observer.error('ERRORR');
            }*/
          },
          100
        );
      }
    ).retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter((valor, index) => {
      if (valor % 2 !== 0) {
        return true;
      } else {
        return false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
