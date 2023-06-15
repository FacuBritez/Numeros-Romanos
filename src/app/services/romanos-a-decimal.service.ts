import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanosADecimalService {

  public convertToDecimal(num: string) {

    let numeroDecimal = 0;
    let numeroAnterior: number | null = null;
    let numeroActual: number;

    let numerosRomanos: [string, number][] = [
      ["M", 1000],
      ["D", 500],
      ["C", 100],
      ["L", 50],
      ["X", 10],
      ["V", 5],
      ["I", 1]
    ];

    //Restricciones

    //Num no puede tener caracteres que no son numeros romanos

    //Num no puede tener más de tres "M" "C" "X" o "I" seguidas

    //Num no puede tener más de 1 "D" "L" o "V" seguidas



    //recorre el string num
    for (let i = 0; i < num.length; i++) {

      //recorre el array de numeros romanos
      for (let j = 0; j < numerosRomanos.length; j++) {

        //Si la letra coincide
        if (num[i] == numerosRomanos[j][0]) {

          //Cambiamos la variable del numero actual para mayor legibilidad
          numeroActual = numerosRomanos[j][1];


          //Si la letra es la primera del numero romano
          if (numeroAnterior == null) {

            //actualizamos la variable numeroAnterior
            numeroAnterior = numeroActual;
          }


          //Si la letra esta siendo restada por su letra anterior
          if (numeroAnterior < numeroActual) {

            //en la vuelta anterior se sumo, asi que primero la restamos 2 veces al numeroDecimal
            numeroDecimal -= numeroAnterior * 2;

            //despues sumamos el numero actual(la resta se aplico en el paso anterior)
            numeroDecimal += numeroActual;

            // y actualizamos el numeroAnterior
            numeroAnterior = numeroActual /* - numeroAnterior  Creo que esto no va, pero para no borrarlo, lo comento*/;
          }


          //Si la letra NO esta siendo restada por su letra anterior
          else {

            //Lo sumamos al numeroDecimal
            numeroDecimal += numeroActual;

            //y actualizamos el numeroAnterior
            numeroAnterior = numeroActual;
          }
        }
      }
    }
    return numeroDecimal /*console.log(numeroDecimal)*/;
  }
}