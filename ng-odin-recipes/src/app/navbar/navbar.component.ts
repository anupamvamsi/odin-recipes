import { Component, OnInit } from '@angular/core';
import {
  IRecipe,
  BreadAndEggs,
  MaggiAndEggs,
  BoiledEggs,
} from '../recipe/recipe-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  recipes: Array<IRecipe>;

  constructor() {
    this.recipes = [];
  }

  ngOnInit() {
    this.recipes.push(new BreadAndEggs(), new MaggiAndEggs(), BoiledEggs);
  }
}
