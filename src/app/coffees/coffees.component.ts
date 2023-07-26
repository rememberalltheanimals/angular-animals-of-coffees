import { Component } from '@angular/core';
import { Coffee } from '../coffee';
import { COFFEES } from '../sample-coffees';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent {

  coffees = COFFEES;
  selectedCoffee?: Coffee;

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }

}
