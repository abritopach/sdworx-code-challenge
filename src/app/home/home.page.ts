import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  coffees: {type: string, price: number, description: string, image: string}[] = [];
  priceCoffeeSize = 0;
  priceCoffeeToppings = 0;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffees = this.coffeeService.getCoffeeTypes();
  }

  coffeSizeEmitter(event: any) {
    console.log('coffeSizeEmitter', event);
    this.priceCoffeeSize = event.price;
  }

  coffeToppingsEmitter(event: {name: string, price: number, count: number}[]) {
    console.log('coffeToppingsEmitter', event);
    this.priceCoffeeToppings = 0;
    event.forEach(item => {
      this.priceCoffeeToppings += item.price * item.count;
    });

  }

}
