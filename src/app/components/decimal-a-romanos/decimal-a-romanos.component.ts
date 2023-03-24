import { Component, OnInit } from '@angular/core';
import { DecimalARomanosService } from 'src/app/services/decimal-a-romanos.service';

@Component({
  selector: 'app-decimal-a-romanos',
  templateUrl: './decimal-a-romanos.component.html',
  styleUrls: ['./decimal-a-romanos.component.sass']
})
export class DecimalARomanosComponent implements OnInit {

  numeroDecimal: number = 0;
  romanResult: string = '';

  actualiza(numeroDecimal: number) { 
    this.romanResult = this.decimalARomanosService.convertToRoman(numeroDecimal);
  }

  constructor(public decimalARomanosService:DecimalARomanosService) { }

  ngOnInit(): void {
  }

}
