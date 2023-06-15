import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecimalARomanosService {
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
      
      //Limitando el rango del imput
      if (num < 1) {
        console.log("El numero no puede ser menor a 1")
        return ""
      }
      if (num > 3999) {
        console.log("El numero no puede ser mayor a 3999")
        return ""
      }

      //Itera sobre los array de numeros romanos y sus valores en decimal [string,number]
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
