import { Component, OnInit } from '@angular/core';
import { DecimalARomanosService } from 'src/app/services/decimal-a-romanos.service';

@Component({
  selector: 'app-decimal-a-romanos',
  templateUrl: './decimal-a-romanos.component.html',
  styleUrls: ['./decimal-a-romanos.component.sass']
})
export class DecimalARomanosComponent implements OnInit {

  constructor(public decimalARomanosService:DecimalARomanosService) { }
  
  numeroDecimal: number | null = null;
  romanResult: string = '';

  actualiza(numeroDecimal: number | null) {
    //numeroDecimal null
    if (!numeroDecimal) return this.romanResult = '';
    //numeroDecimal number
    return this.romanResult = this.decimalARomanosService.convertToRoman(numeroDecimal);
  }

  ngOnInit(): void {
  }

}
