import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTop10Component } from './card-top10/card-top10.component';
import { CardClassicComponent } from './card-classic/card-classic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HeaderComponent } from './header/header.component';
import { NavAccountComponent } from './nav-account/nav-account.component';
import { RowClassicComponent } from './row-classic/row-classic.component';
import { RowTop10Component } from './row-top10/row-top10.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTop10Component,
    CardClassicComponent,
    NavbarComponent,
    HomeCardsComponent,
    HeaderComponent,
    NavAccountComponent,
    RowClassicComponent,
    RowTop10Component,
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
