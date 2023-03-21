import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import { DecimalARomanosService } from './services/decimal-a-romanos.service';
import { RomanosADecimalService } from './services/romanos-a-decimal.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanosADecimalComponent } from './components/romanos-a-decimal/romanos-a-decimal.component';
import { DecimalARomanosComponent } from './components/decimal-a-romanos/decimal-a-romanos.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RomanosADecimalComponent,
    DecimalARomanosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DecimalARomanosService,
    RomanosADecimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
