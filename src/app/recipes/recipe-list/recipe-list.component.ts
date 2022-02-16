import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'curry',
      'spicy indian curry',
      'https://media.istockphoto.com/photos/chicken-curry-picture-id1124973765?k=20&m=1124973765&s=612x612&w=0&h=y8JcYe_oxCdKdP_4RpFG5opaygOasZUKdEqT35nVu6c='
    ),
    new Recipe(
      'curry',
      'spicy indian curry',
      'https://media.istockphoto.com/photos/chicken-curry-picture-id1124973765?k=20&m=1124973765&s=612x612&w=0&h=y8JcYe_oxCdKdP_4RpFG5opaygOasZUKdEqT35nVu6c='
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    // console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
