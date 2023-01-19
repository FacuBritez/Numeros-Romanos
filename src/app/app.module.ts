import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RomanosADecimalComponent } from './components/romanos-a-decimal/romanos-a-decimal.component';
import { DecimalARomanosComponent } from './components/decimal-a-romanos/decimal-a-romanos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RomanosADecimalComponent,
    DecimalARomanosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
