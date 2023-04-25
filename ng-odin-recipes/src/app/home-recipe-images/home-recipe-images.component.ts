import { Component } from '@angular/core';
import { ImageLink } from '../home-recipe-img/ImageLink';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './home-recipe-images.component.html',
  styleUrls: ['./home-recipe-images.component.scss'],
})
export class HomeRecipeImagesComponent {
  imageLinks: ImageLink[];

  constructor() {
    this.imageLinks = [];
  }

  ngOnInit() {
    this.imageLinks.push(
      {
        srcImage:
          'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        altText: 'Link to Eggs and Bread Recipe',
        linkToPage: '/recipe/bread-and-eggs',
      },
      {
        srcImage:
          'https://images.unsplash.com/photo-1603033172872-c2525115c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        altText: 'Link to Maggi and Eggs Recipe',
        linkToPage: '/recipe/maggi-and-eggs',
      },
      {
        srcImage:
          'https://images.unsplash.com/photo-1551014029-03820d0b88f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        altText: 'Link to Boiled Eggs Recipe',
        linkToPage: '/recipe/boiled-eggs',
      }
    );
  }
}
