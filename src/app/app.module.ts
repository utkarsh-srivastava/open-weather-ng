import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WeatherDao } from './weather.dao.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [WeatherDao],
  bootstrap: [AppComponent]
})
export class AppModule { }
