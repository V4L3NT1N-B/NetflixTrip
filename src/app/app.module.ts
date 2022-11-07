import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTop10Component } from './card-top10/card-top10.component';
import { CardClassicComponent } from './card-classic/card-classic.component';
import { RowClassicComponent } from './row-classic/row-classic.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTop10Component,
    CardClassicComponent,
    RowClassicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
