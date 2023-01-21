import { Component, OnInit } from '@angular/core';
import { RomanosADecimalService } from 'src/app/services/romanos-a-decimal.service';

@Component({
  selector: 'app-romanos-a-decimal',
  templateUrl: './romanos-a-decimal.component.html',
  styleUrls: ['./romanos-a-decimal.component.sass']
})
export class RomanosADecimalComponent implements OnInit {

  constructor(private _servicio:RomanosADecimalService) { }

  prueba(){
    console.log(this._servicio.convertToDecimal('XI'));
  }

  ngOnInit(): void {
  }

}
