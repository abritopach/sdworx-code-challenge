import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  getCoffeeTypes() {
    return [
      {type: 'Brasilian', description: "Brazilian specialty coffee is different from other coffees in the world because of its unique flavor profile. It's known for having floral notes and bright acidity, which means it has a bright, refreshing taste. Brazilian coffee beans are often roasted on a light-medium profile in order to bring out this brightness in flavor." , image: 'assets/images/brazilian-coffee.webp'},
      {type: 'Columbian', description: 'Colombia is famous for growing some of the best coffee beans in the world; the plants thrive under the shade of banana trees in the tropical climate. Because of Colombia’s high altitude, it also shapes the way the bean grows. the country produces a crazy amount of coffee.', image: 'assets/images/columbian-coffee.webp'},
      {type: 'Peruvian', description: "The region along the Northern Peruvian Amazon has been dubbed the land of coffee, honey, and natural forests. Peru has been blessed with land perfect for any kind of cultivation. That's why Peruvian coffee is considered quite extraordinary. In fact, it's globally viewed as a benchmark of quality.", image: 'assets/images/peruvian-coffee.webp'},
    ]
  }
}
