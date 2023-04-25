import { Component, OnInit } from '@angular/core';
import { IRecipe, BreadAndEggs } from './recipe-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: BreadAndEggs = new BreadAndEggs();

  constructor() {
    this.recipe = new BreadAndEggs();
  }

  ngOnInit() {
    let recipeInside: IRecipe;
    this.recipe = new BreadAndEggs();

    console.log('LALLALALALALAL');
    // if (this.route.params['recipeName'] === 'bread-and-eggs') {
    // this.recipe = new BreadAndEggs();
    // }

    /*this.recipeOutside = */
    // this.route.params.subscribe({
    //   next(params: any) {
    //     console.log('OUTSIDE', params['recipeName']);

    //     if (params['recipeName'] === 'bread-and-eggs') {
    //       // recipeInside = new BreadAndEggs();
    //       console.log('INSIDE', params['recipeName']);
    //       // return recipeInside;
    //     }
    //     // return null;
    //   },
    // });

    // this.recipeOutside = recipeInside;
  }
}
