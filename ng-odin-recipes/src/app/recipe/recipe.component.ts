import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe-interface';
import { ActivatedRoute } from '@angular/router';
import { PseudoBackendService } from '../services/pseudo-backend.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe = {
    title: 'Error 404',
    description: ['Oops, not meant to be here! Maybe a new recipe?'],
    ingredients: ['Yikes', 'Eeps'],
    steps: [
      "I'm sorry",
      "I'm sorry",
      '*steps generated courtesy of AI completion',
    ],
    imageLink: {
      srcImage:
        'https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      altText: 'oh no',
      linkToPage: '/',
    },
  };

  constructor(
    private route: ActivatedRoute,
    private backendService: PseudoBackendService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['recipeName'] === 'bread-and-eggs') {
        this.backendService.getRecipe(1).subscribe((r: any) => {
          this.recipe = r;
        });
      }
      if (params['recipeName'] === 'maggi-and-eggs') {
        this.backendService.getRecipe(2).subscribe((r: any) => {
          this.recipe = r;
        });
      }
      if (params['recipeName'] === 'boiled-eggs') {
        this.backendService.getRecipe(3).subscribe((r: any) => {
          this.recipe = r;
        });
      }
    });
  }
}
