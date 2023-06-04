import { Component, OnInit } from '@angular/core';
import { DecimalARomanosService } from 'src/app/services/decimal-a-romanos.service';

@Component({
  selector: 'app-decimal-a-romanos',
  templateUrl: './decimal-a-romanos.component.html',
  styleUrls: ['./decimal-a-romanos.component.sass']
})
export class DecimalARomanosComponent implements OnInit {

  numeroDecimal: number | null = null;
  romanResult: string = '';

  actualiza(numeroDecimal: number | null) {
    if (numeroDecimal){
      this.romanResult = this.decimalARomanosService.convertToRoman(numeroDecimal);
    } else {
      this.romanResult = '';
    }
  }

  constructor(public decimalARomanosService:DecimalARomanosService) { }

  ngOnInit(): void {
  }

}
