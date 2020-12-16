import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Services } from '../services/service.declaration';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RandomIntegerComponent } from './random-integer/random-integer.component';
import { FormsModule } from '@angular/forms';

const APP_PROVIDERS: any[] = [
  Services,
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    RandomIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    APP_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
