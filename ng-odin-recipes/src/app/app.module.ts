import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdinHomeComponent } from './odin-home/odin-home.component';
import { HomeRecipeImgComponent } from './home-recipe-img/home-recipe-img.component';
import { HomeRecipeImagesComponent } from './home-recipe-images/home-recipe-images.component';

@NgModule({
  declarations: [
    AppComponent,
    OdinHomeComponent,
    HomeRecipeImgComponent,
    HomeRecipeImagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
