// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/* Project */

// Models | Interfaces
import { Coffee } from '../models/coffee.model';
import { Cup } from '../models/cup.model';
import { Topping } from '../models/topping.model';

// Services
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentYear = new Date().getFullYear();
  coffees: Coffee[] = [];
  coffeeMap = new Map();
  toppings: Topping[] = [];
  cup: Cup | undefined;


  constructor(private coffeeService: CoffeeService, private router: Router) {}

  ionViewDidEnter() {
    this.coffees = this.coffeeService.getCoffeeTypes();
    this.coffees.forEach(coffee => {
      this.coffeeMap.set(coffee.type, {price: coffee.price, priceCoffeeSize: 0, priceCoffeeToppings: 0});
    });
  }

  coffeSizeEmitter(event: Cup, coffee: Coffee) {
    this.cup = {...event};
    this.coffeeMap.get(coffee.type).priceCoffeeSize = event.price;
  }

  coffeToppingsEmitter(event: Topping[], coffee: Coffee) {
    this.toppings = [...event];
    this.coffeeMap.get(coffee.type).priceCoffeeToppings = 0;
    event.forEach(item => {
      this.coffeeMap.get(coffee.type).priceCoffeeToppings += item.price * item.count;
    });
  }

  goToPaymentPage(coffee: Coffee) {
    this.router.navigate(['payment'], { state: 
      { coffee, 
        price: coffee.price + this.coffeeMap.get(coffee.type).priceCoffeeSize + this.coffeeMap.get(coffee.type).priceCoffeeToppings,
        toppings: this.toppings,
        cup: this.cup
      }
    });
  }

}
