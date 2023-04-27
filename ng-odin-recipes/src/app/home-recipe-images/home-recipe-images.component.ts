import { Component } from '@angular/core';
import { ImageLink } from '../home-recipe-img/ImageLink';
import { IRecipe } from '../recipe/recipe-interface';
import { PseudoBackendService } from '../services/pseudo-backend.service';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './home-recipe-images.component.html',
  styleUrls: ['./home-recipe-images.component.scss'],
})
export class HomeRecipeImagesComponent {
  recipes: IRecipe[];

  constructor(private backendService: PseudoBackendService) {
    this.recipes = [];
  }

  ngOnInit() {
    this.backendService
      .getRecipes()
      .subscribe((recipes: IRecipe[]) => (this.recipes = recipes));
  }
}
