import { Component, Input } from '@angular/core';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent {
  @Input() coffee?: Coffee;
}
