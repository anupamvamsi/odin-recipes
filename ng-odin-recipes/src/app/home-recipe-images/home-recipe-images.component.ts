import { Component } from '@angular/core';
import { ImageLink } from '../home-recipe-img/ImageLink';
import {
  IRecipe,
  BreadAndEggs,
  MaggiAndEggs,
  BoiledEggs,
} from '../recipe/recipe-interface';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './home-recipe-images.component.html',
  styleUrls: ['./home-recipe-images.component.scss'],
})
export class HomeRecipeImagesComponent {
  recipes: IRecipe[];

  constructor() {
    this.recipes = [];
  }

  ngOnInit() {
    this.recipes.push(new BreadAndEggs(), new MaggiAndEggs(), BoiledEggs);
  }
}
