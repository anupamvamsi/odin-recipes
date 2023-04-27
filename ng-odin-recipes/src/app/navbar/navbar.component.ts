import { Component, OnInit, Input } from '@angular/core';
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
  @Input() id: number;

  constructor(private backendService: PseudoBackendService) {
    this.recipes = [];
  }

  ngOnInit() {
    this.backendService
      .getRecipesExcept(this.id)
      .subscribe((recipes: IRecipe[]) => (this.recipes = recipes));
  }
}
