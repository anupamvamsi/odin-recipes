import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe/recipe-interface';
import { PseudoBackendService } from '../services/pseudo-backend.service';
/* idk how I typed it but I did - ㄣ*/

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  recipes: Array<IRecipe>;

  constructor(private backendService: PseudoBackendService) {
    this.recipes = [];
  }

  ngOnInit() {
    this.backendService
      .getRecipes()
      .subscribe((recipes: IRecipe[]) => (this.recipes = recipes));
  }
}
