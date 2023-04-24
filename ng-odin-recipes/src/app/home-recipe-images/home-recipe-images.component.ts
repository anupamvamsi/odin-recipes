import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './home-recipe-images.component.html',
  styleUrls: ['./home-recipe-images.component.scss'],
})
export class HomeRecipeImagesComponent {
  srcImages: string[];
  altText: string[];

  constructor() {
    this.srcImages = [];
    this.altText = [];
  }

  ngOnInit() {
    this.srcImages.push(
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1603033172872-c2525115c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'https://images.unsplash.com/photo-1551014029-03820d0b88f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
    );
  }
}
