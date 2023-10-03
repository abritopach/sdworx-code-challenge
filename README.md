# SD Worx Code Challenge

[![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/abritopach)

## ℹ️ Description

### Context

We have a coffee machine which can prepare customised coffee as per the customers requirements:

The coffee machine has the following criteria:

* accepts only 1€ coin or bills of €2, €5 or €10
* a coffee is composed based on the:
    * Cup Size: Small (2€), Medium (3€), Large (3,50€)
    * Coffee Type: Columbian (5€), Peruvian (6€50), Brazilian (6€)
    * Several toppings / syrups: Chantilly (4€), Caramel syrup (2€), Chocolate chips (1€), Vanilla syrup (2€). It is possible to take several times the same topping: double Chantilly and simple Vanilla syrup for 1 coffee for instance.

Ordering process is simple:

 * The customer selects the coffee as per the options mentioned in the criteria
 * The selection triggers the calculation and display the price to pay
 * The customer can introduce coin(s) / bill(s) then the machine will refund ay change and provide an Order Number with summary of the selection
 * The customer can also cancel the order after having created the coffee and/or inserted money into the machine

### Assignment
You are required to create a GUI which must contain at least 2 components with the following considerations:

 * use Angular / TypeScript / AngularCLI or Webpack
 * You can use all the resources required: external library (without excess), internet, blog, documentation, generation via IDE etc.
 * Simple GUI, no need for any complicated result.


## 💡 Proposed solution

The code challenge has been developed using Angular, TypeScript, Ionic (UI component library) and Angular Cli.

Two customised components have been generated:

* On the one hand, the coffee-size component, which is responsible for displaying and managing the selection of the different sizes for the coffee cup.

* On the other hand, the coffee-toppings component that allows us to customise our coffee by adding the desired toppings / syrups.

A service has also been generated to manage the different types of coffee, coffee cup sizes, toppings with the aim of making the code as reusable as possible and assuming that this data could come from an API Rest / Graphql queries.

Technologies / languages: Angular, Ionic & TypeScript.

## App Example

![App](readme_resources/app.gif "App")

### App Responsive Version

I have also designed the app to look fairly good on tablets or mobile devices.

## Running development server

Before you go through this app, you should have Ionic installed on your machine.

* Test in localhost:

To run it, cd into `sdwordx-code-challenge` and run:

```bash
npm install
ionic serve
```

Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

## Unit testing

I have added some unit tests to the service but I haven't had time to generate tests in all the components, pages,...

## Requirements

* [Node.js](http://nodejs.org/)
* [Angular](https://angular.io/)
* [Ionic](https://ionicframework.com/getting-started#cli)
