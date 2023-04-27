import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OdinHomeComponent } from './odin-home/odin-home.component';
import { HomeRecipeImgComponent } from './home-recipe-img/home-recipe-img.component';
import { HomeRecipeImagesComponent } from './home-recipe-images/home-recipe-images.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { CreditsComponent } from './credits/credits.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavddComponent } from './navdd/navdd.component';
import { BacktopComponent } from './backtop/backtop.component';

@NgModule({
  declarations: [
    AppComponent,
    OdinHomeComponent,
    HomeRecipeImgComponent,
    HomeRecipeImagesComponent,
    SocialFooterComponent,
    CreditsComponent,
    HomeComponent,
    RecipeComponent,
    NavbarComponent,
    NavddComponent,
    BacktopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
