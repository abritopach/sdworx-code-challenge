// Angular
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/* Project */

// Models | Interfaces
import { Cup } from 'src/app/models/cup.model';

// Services
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-size',
  templateUrl: './coffee-size.component.html',
  styleUrls: ['./coffee-size.component.scss'],
})
export class CoffeeSizeComponent  implements OnInit {

  @Output() coffeSizeEmitter = new EventEmitter<Cup>();
  cups: Cup[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.cups = this.coffeeService.getCoffeeSizes();
  }

  onClickCupSize(cup: Cup) {
    this.cups.forEach(item => {
      item.size === cup.size ? item.isSelected = true : item.isSelected = false;
    });
    this.coffeSizeEmitter.emit(cup);
  }

}
