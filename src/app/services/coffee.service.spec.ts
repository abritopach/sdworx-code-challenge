import { TestBed } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Coffee objects with correct properties and values', () => {
    const coffeeService = new CoffeeService();
    const coffeeTypes = coffeeService.getCoffeeTypes();

    expect(Array.isArray(coffeeTypes)).toBe(true);
    expect(coffeeTypes.length).toBeGreaterThan(0);

    coffeeTypes.forEach(coffee => {
      expect(coffee.type).toBeDefined();
      expect(coffee.price).toBeDefined();
      expect(coffee.description).toBeDefined();
      expect(coffee.image).toBeDefined();

      expect(typeof coffee.type).toBe('string');
      expect(typeof coffee.price).toBe('number');
      expect(typeof coffee.description).toBe('string');
      expect(typeof coffee.image).toBe('string');
    });
  });

  it('should return an array with at least one Coffee object', () => {
    const coffeeService = new CoffeeService();
    const coffeeTypes = coffeeService.getCoffeeTypes();

    expect(Array.isArray(coffeeTypes)).toBe(true);
    expect(coffeeTypes.length).toBeGreaterThan(0);
  });

  it('should have \'isSelected\' property set to false for each cup size', () => {
    const coffeeService = new CoffeeService();
    const coffeeSizes = coffeeService.getCoffeeSizes();
    coffeeSizes.forEach((size) => {
      expect(size.isSelected).toBe(false);
    });
  });

  it('should not have any null or undefined properties in the returned array', () => {
    const coffeeService = new CoffeeService();
    const coffeeSizes = coffeeService.getCoffeeSizes();
    coffeeSizes.forEach((size) => {
      expect(size).not.toBeNull();
      expect(size).not.toBeUndefined();
      expect(size.size).not.toBeNull();
      expect(size.size).not.toBeUndefined();
      expect(size.price).not.toBeNull();
      expect(size.price).not.toBeUndefined();
      expect(size.image).not.toBeNull();
      expect(size.image).not.toBeUndefined();
      expect(size.isSelected).not.toBeNull();
      expect(size.isSelected).not.toBeUndefined();
    });
  });

  it('should return an array of Topping objects with count property initialized to 0', () => {
    const coffeeService = new CoffeeService();
    const toppings = coffeeService.getCoffeeToppings();

    toppings.forEach(topping => {
      expect(topping.count).toBe(0);
    });
  });
});
