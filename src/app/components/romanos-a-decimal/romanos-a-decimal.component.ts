import { Component, OnInit } from '@angular/core';
import { RomanosADecimalService } from 'src/app/services/romanos-a-decimal.service';

@Component({
  selector: 'app-romanos-a-decimal',
  templateUrl: './romanos-a-decimal.component.html',
  styleUrls: ['./romanos-a-decimal.component.sass']
})
export class RomanosADecimalComponent implements OnInit {
  
  numeroRomano: string = '';
  decimalResult: number | null = null;

  actualiza(numeroRomano: string) {
    this.decimalResult = this.romanosADecimalService.convertToDecimal(numeroRomano.toUpperCase());

    //Impide que retorne 0
    if (numeroRomano == ''){
      this.decimalResult = null;
    }
  }
  
  constructor (public romanosADecimalService:RomanosADecimalService){
  }

  ngOnInit(): void {
  }

}