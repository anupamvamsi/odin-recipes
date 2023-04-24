import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './home-recipe-images.component.html',
  styleUrls: ['./home-recipe-images.component.scss'],
})
export class HomeRecipeImagesComponent {
  srcImages: string[];
  altTexts: string[];

  constructor() {
    this.srcImages = [];
    this.altTexts = [];
  }

  ngOnInit() {
    this.srcImages.push(
      'https://images.unsplash.com/photo-1525351484163-752941444d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1603033172872-c252511c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1551014029-03820d0b885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
    );

    this.altTexts.push(
      'Link to Eggs and Bread Recipe',
      'Link to Maggi and Eggs Recipe',
      'Link to Boiled Eggs Recipe'
    );
  }
}
