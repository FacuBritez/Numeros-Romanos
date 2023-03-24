import { Component, OnInit } from '@angular/core';
import { RomanosADecimalService } from 'src/app/services/romanos-a-decimal.service';

@Component({
  selector: 'app-romanos-a-decimal',
  templateUrl: './romanos-a-decimal.component.html',
  styleUrls: ['./romanos-a-decimal.component.sass']
})
export class RomanosADecimalComponent implements OnInit {
  
  numeroRomano: string = '';
  decimalResult: number = 0;

  actualiza(numeroRomano: string) { 
    this.decimalResult = this.romanosADecimalService.convertToDecimal(numeroRomano.toUpperCase());
  }
  
  constructor (public romanosADecimalService:RomanosADecimalService){
  }

  public valor:any = document.getElementById("toDecimal");
  

  ngOnInit(): void {
  }

}
