// Angular
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/* Project */

// Models | Interfaces
import { Topping } from 'src/app/models/topping.model';

// Services
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-toppings',
  templateUrl: './coffee-toppings.component.html',
  styleUrls: ['./coffee-toppings.component.scss'],
})
export class CoffeeToppingsComponent  implements OnInit {

  toppings: Topping[] = [];
  @Output() coffeToppingsEmitter = new EventEmitter<Topping[]>();

  constructor(private coffeService: CoffeeService) { }

  ngOnInit() {
    this.toppings = this.coffeService.getCoffeeToppings();
  }

  onClickAddToppingHandler(topping: Topping) {
    this.toppings.forEach(item => {
      item.name === topping.name ? item.count++ : item.count;
    });
    this.coffeToppingsEmitter.emit(this.toppings);
  }
}
