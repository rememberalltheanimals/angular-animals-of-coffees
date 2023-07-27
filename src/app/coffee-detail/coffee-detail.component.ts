import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent {
  coffee: Coffee | undefined;

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCoffee();
  }

  getCoffee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.coffeeService.getCoffee(id)
    .subscribe(coffee => this.coffee = coffee);
  }

  goBack(): void {
    this.location.back();
  }
}
