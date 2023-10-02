import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  coffees: {type: string, description: string, image: string}[] = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.coffees = this.coffeeService.getCoffeeTypes();
  }

}
