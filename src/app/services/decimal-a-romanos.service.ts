import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecimalARomanosService {

  constructor() { }


  public convertToRoman(num: number) {
      let numeroRomano = "";
      let numerosRomanos: [string, number][] = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
      ];

      for (let i = 0; i < numerosRomanos.length; i++) {

        for (let j = 3; j > 0; j--) {
          if (num >= numerosRomanos[i][1]) {
            numeroRomano += numerosRomanos[i][0];
            num -= numerosRomanos[i][1];
          }
        }
      }
      return numeroRomano;
    }
}
