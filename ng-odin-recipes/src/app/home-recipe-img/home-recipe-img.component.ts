import { Component, Input } from '@angular/core';
import { ImageLink } from './ImageLink';

@Component({
  selector: 'app-home-recipe-img',
  templateUrl: './home-recipe-img.component.html',
  styleUrls: ['./home-recipe-img.component.scss'],
})
export class HomeRecipeImgComponent {
  // it errors out - add     "strictPropertyInitialization": false, after "strict": true in tsconfig.json's compilerOptions
  @Input() imageLink: ImageLink;
}
