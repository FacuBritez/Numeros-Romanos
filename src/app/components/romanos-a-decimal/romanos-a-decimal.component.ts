import { Component, OnInit } from '@angular/core';
import { RomanosADecimalService } from 'src/app/services/romanos-a-decimal.service';

@Component({
  selector: 'app-romanos-a-decimal',
  templateUrl: './romanos-a-decimal.component.html',
  styleUrls: ['./romanos-a-decimal.component.sass']
})
export class RomanosADecimalComponent implements OnInit {
  
  constructor (public romanosADecimalService:RomanosADecimalService){ }

  numeroRomano: string = '';
  decimalResult: string | null = null;

  actualiza(numeroRomano: string) {
    this.decimalResult = this.romanosADecimalService.convertToDecimal(numeroRomano);    
  }
  
  ngOnInit(): void {
  }

}