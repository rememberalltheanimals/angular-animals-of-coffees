import { Injectable } from '@angular/core';
import { Coffee } from './coffee';
import { COFFEES } from './sample-coffees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private messageService: MessageService) {}

  getCoffees(): Observable<Coffee[]> {
    const coffees = of(COFFEES);
    this.messageService.add('coffeeService: fetched coffees');
    return coffees;
  }

  getCoffee(id: number): Observable<Coffee> {
    const coffee = COFFEES.find(c => c.id === id)!;
    this.messageService.add(`CoffeeService: fetched coffee id=${id}`);
    return of(coffee);
  }
}
