// Angular
import { Injectable } from '@angular/core';

/* Project */

// Models | Interfaces
import { Coffee } from '../models/coffee.model';
import { Cup } from '../models/cup.model';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  getCoffeeTypes(): Coffee[] {
    return [
      {type: 'Brasilian', price: 6, description: "Brazilian specialty coffee is different from other coffees in the world because of its unique flavor profile. It's known for having floral notes and bright acidity, which means it has a bright, refreshing taste. Brazilian coffee beans are often roasted on a light-medium profile in order to bring out this brightness in flavor." , image: 'assets/images/brazilian-coffee.webp'},
      {type: 'Columbian', price: 5,  description: 'Colombia is famous for growing some of the best coffee beans in the world; the plants thrive under the shade of banana trees in the tropical climate. Because of Colombia’s high altitude, it also shapes the way the bean grows. the country produces a crazy amount of coffee.', image: 'assets/images/columbian-coffee.webp'},
      {type: 'Peruvian', price: 6.50, description: "The region along the Northern Peruvian Amazon has been dubbed the land of coffee, honey, and natural forests. Peru has been blessed with land perfect for any kind of cultivation. That's why Peruvian coffee is considered quite extraordinary. In fact, it's globally viewed as a benchmark of quality.", image: 'assets/images/peruvian-coffee.webp'},
    ]
  }

  getCoffeeSizes(): Cup[] {
    return [
      {size: 'Small', price: 2, image: 'assets/images/coffee-sizes/small.png', isSelected: false},
      {size: 'Medium', price: 3,   image: 'assets/images/coffee-sizes/medium.png', isSelected: false},
      {size: 'Large', price: 3.50, image: 'assets/images/coffee-sizes/large.png', isSelected: false},
    ]
  }

  getCoffeeToppings(): Topping[] {
    return [
      {name: 'Chantilly', price: 4, count: 0, image: 'assets/images/coffee-toppings/chantilly.webp'},
      {name: 'Caramel syrup', price: 2, count: 0, image: 'assets/images/coffee-toppings/caramel-syrup.webp'},
      {name: 'Chocolate chips', price: 1, count: 0, image: 'assets/images/coffee-toppings/chocolate-chips.webp'},
      {name: 'Vanilla syrup', price: 2, count: 0, image: 'assets/images/coffee-toppings/vanilla-syrup.webp'}
    ]
  }
}
