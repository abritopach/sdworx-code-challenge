import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-size',
  templateUrl: './coffee-size.component.html',
  styleUrls: ['./coffee-size.component.scss'],
})
export class CoffeeSizeComponent  implements OnInit {

  cups: {size: string, price: number, image: string, isSelected: boolean}[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.cups = this.coffeeService.getCoffeeSizes();
  }

  onClickCupSize(cup: {size: string, price: number, image: string, isSelected: boolean}) {
    console.log('onClickCupSize', cup);
    this.cups.forEach(item => {
      item.size === cup.size ? item.isSelected = true : item.isSelected = false;
    });
  }

}
