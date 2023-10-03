// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

// Ionic
import { AlertController } from '@ionic/angular';

// Third parties
import { v4 as uuid } from 'uuid';

/* Project  */

// Models | Interfaces
import { Coffee } from '../models/coffee.model';
import { Topping } from '../models/topping.model';
import { Cup } from '../models/cup.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  coffee: Coffee | undefined;
  cup: Cup | undefined;
  toppings: Topping[] = [];
  price = 0;
  moneyCounter = 0;
  refundMoney = 0;
  uuid = uuid();
  showPaymentSection = false;
  abs = Math.abs;

  constructor(private router: Router, private alertController: AlertController) { }

  currentYear = new Date().getFullYear();
  // Simulates the cash held by a user.
  todo: string[] = ['1 €', '2 €', '5 €', '10 €', '1 €', '1 €', '2 €', '10 €'];

  done: string[] = [];

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.coffee = state && state['coffee'];
    this.price = state && state['price'];
    this.cup = state && state['cup'];
    this.toppings = state && state['toppings'];
  }

  ionViewDidEnter() {
    this.todo = ['1 €', '2 €', '5 €', '10 €', '1 €', '1 €', '2 €'];
    this.done = [];
  }

  cancelPaymentProcess() {
    this.router.navigate(['home']);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.moneyCounter = 0;
      event.container.data.forEach(item => {
        this.moneyCounter += parseFloat(item.replace(/€/g, ""));
      });
      if (this.price - this.moneyCounter <= 0) {
        this.presentAlert();
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Payment process',
      message: "Purchase completed! Don't forget to withdraw your money. Enjoy your coffee! :)",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentCancelPaymentProcess() {
    const alert = await this.alertController.create({
      header: 'Payment process',
      message: "Are you sure you want to cancel the payment process?",
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.cancelPaymentProcess();
          }
        }
      ]
    });

    await alert.present();
  }

 
}
