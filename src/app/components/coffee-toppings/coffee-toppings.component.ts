import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-toppings',
  templateUrl: './coffee-toppings.component.html',
  styleUrls: ['./coffee-toppings.component.scss'],
})
export class CoffeeToppingsComponent  implements OnInit {

  toppings: {name: string, price: number, count: number}[] = [];
  @Output() coffeToppingsEmitter = new EventEmitter<{name: string, price: number, count: number}[]>();

  constructor(private coffeService: CoffeeService) { }

  ngOnInit() {
    this.toppings = this.coffeService.getCoffeeToppings();
  }

  onClickAddToppingHandler(topping: {name: string, price: number, count: number}) {
    this.toppings.forEach(item => {
      item.name === topping.name ? item.count++ : item.count;
    });
    this.coffeToppingsEmitter.emit(this.toppings);
  }
}
