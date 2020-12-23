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
import { ListRandomizerComponent } from './list-randomizer/list-randomizer.component';
import { RandomDecimalComponent } from './random-decimal/random-decimal.component';
import { StringGeneratorComponent } from './string-generator/string-generator.component';

const APP_PROVIDERS: any[] = [
  Services,
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    RandomIntegerComponent,
    ListRandomizerComponent,
    RandomDecimalComponent,
    StringGeneratorComponent,
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
