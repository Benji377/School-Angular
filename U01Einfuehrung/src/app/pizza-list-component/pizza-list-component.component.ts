import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/shared/pizza';

@Component({
  selector: 'app-pizza-list-component',
  templateUrl: './pizza-list-component.component.html',
  styleUrls: ['./pizza-list-component.component.css']
})
export class PizzaListComponentComponent implements OnInit {
  pizzas = [
    new Pizza(
      'Schinken Pilze',
      'Knusprige Ofenpizza mit Kochschinken und Steinpilzen',
      new Date('December 1, 2024'),
      9.5,
      [ 'Schinken', 'Pilze', 'Tomaten' ]),
    new Pizza(
      'Teufelspizza',
      'Pikante Pizza mit scharfer Salami',
      new Date('December 10, 2024'),
      9,
      [ 'Scharfe Salami', 'Tomaten' ]),
    new Pizza(
      'Capricciosa',
      'Traditionelle italienische Pizza',
      new Date('December 20, 2024'),
      10,
      [ 'Tomaten' ]),
    ];

  constructor() { }

  ngOnInit(): void {}

  addPizza(name:string, desc:string, price:string): void {
      let fprice = parseFloat(price);
      let date = new Date();
      let pizzzaaa: Pizza = new Pizza(name, desc, date, fprice, []);
      this.pizzas.push(pizzzaaa);
  }

  clearAll() {
    this.pizzas = [];
  }

}
