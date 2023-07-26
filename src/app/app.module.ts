import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeesComponent } from './coffees/coffees.component';

import { FormsModule } from '@angular/forms';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeesComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
