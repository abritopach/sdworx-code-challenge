import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CoffeeSizeComponent } from '../components/coffee-size/coffee-size.component';
import { CoffeeToppingsComponent } from '../components/coffee-toppings/coffee-toppings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CoffeeSizeComponent, CoffeeToppingsComponent]
})
export class HomePageModule {}
