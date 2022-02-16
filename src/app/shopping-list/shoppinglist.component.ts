import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styles: [''],
})
export class ShoppingList implements OnInit {
  ingrdients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Grapes', 10),
  ];
  constructor() {}
  ngOnInit(): void {}
}
