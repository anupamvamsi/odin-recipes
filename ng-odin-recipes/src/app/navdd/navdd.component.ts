import { Component, Input } from '@angular/core';
import { ImageLink } from '../home-recipe-img/ImageLink';

@Component({
  selector: 'app-navdd',
  templateUrl: './navdd.component.html',
  styleUrls: ['./navdd.component.css'],
})
export class NavddComponent {
  @Input() imageLink: ImageLink;
}
