import { Component, OnInit } from '@angular/core';
import {
  IRecipe,
  BreadAndEggs,
  MaggiAndEggs,
  BoiledEggs,
} from './recipe-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['recipeName'] === 'bread-and-eggs') {
        this.recipe = new BreadAndEggs();
      }
      if (params['recipeName'] === 'maggi-and-eggs') {
        this.recipe = new MaggiAndEggs();
      }
      if (params['recipeName'] === 'boiled-eggs') {
        this.recipe = BoiledEggs;
      }
    });
  }
}
