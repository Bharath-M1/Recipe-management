import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() selectedRecipeData = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}
  selectedRecipe(event: Recipe) {
    // console.log(event);

    this.selectedRecipeData.emit(event);
  }
}
