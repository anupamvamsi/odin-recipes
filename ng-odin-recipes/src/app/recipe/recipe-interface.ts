import { ImageLink } from '../home-recipe-img/ImageLink';

export interface IRecipe {
  id: number;
  title: string;
  description: Array<string>;
  ingredients: Array<string>;
  steps: Array<string>;
  imageLink: ImageLink;
}
