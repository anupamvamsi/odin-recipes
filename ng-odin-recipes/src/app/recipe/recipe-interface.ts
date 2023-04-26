import { ImageLink } from '../home-recipe-img/ImageLink';

export interface IRecipe {
  title: string;
  description: Array<string>;
  ingredients: Array<string>;
  steps: Array<string>;
  imageLink: ImageLink;
}

export class BreadAndEggs implements IRecipe {
  title: string;
  description: Array<string>;
  ingredients: Array<string>;
  steps: Array<string>;
  imageLink: ImageLink;

  constructor() {
    this.title = 'Toasted Bread and Eggs';
    this.description = [
      "It's a bright, sunny morning - and you have a gnawing hunger. But alas! You have not the time to inspire the chef in you to wake up and become the best chef like no one ever was. Gotta make them all? But your Hunger says it's not got the time for you to role play Mash Ketchup for 20-odd years on television all the time saving Pikachow from Steam Rocket. What can you make in ten minutes and on which you wouldn't Choke(m)on?",
      "The answer is right here on this page - toast some crispy, buttery bread optionally with fragrant oregano and whip up some sunny side up eggs with runny yolk, rich and thick like creamy soup which you'd scoop up with the crackling bread, to end up on your tongue which'd take you on a ride ending with you craving and wanting for more!",
    ];
    this.ingredients = [
      'Eggs',
      'Brown bread',
      'Oregano (or)',
      'Chilli flakes / powder',
      'Pepper powder',
      'Salt',
      '(Salted) Butter',
    ];
    this.steps = [
      'Smear butter on bread slices as per your taste and optionally sprinkle oregano or a combination of pepper and salt, else if you are using salted butter, you might not really want the extra seasoning.',
      'Place the bread on a pan on medium heat and toast it until the bread is crisp to a degree of your liking.',
      'While the bread is being toasted, you can set up a (circular) pan for the eggs.',
      'Coat the pan with butter and optionally sprinkle salt or oregano to season the underside of the egg(s) as well.',
      'Light up the pan and once the butter bubbles, you can crack open the egg(s) and make sure to take care not to break the yolk for a perfect sunny side up egg.',
      'Sprinkle oregano or a combination of chilli powder/flakes, salt and pepper, the ratios varying to your liking.',
      'Once you feel the egg is cooked, you can jiggle the egg on to the toasted bread (it becomes easy because of the butter coating) or place it on the side.',
      'However if you want a runny yolk, you may want to not let the egg cook for much longer.',
      'Voilà, you have a delicious meal ready!',
    ];

    this.imageLink = new ImageLink(
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'Image of Toasted Bread and Eggs',
      '/recipe/bread-and-eggs'
    );
  }
}

export class MaggiAndEggs implements IRecipe {
  title: string;
  description: Array<string>;
  ingredients: Array<string>;
  steps: Array<string>;
  imageLink: ImageLink;

  constructor() {
    this.title = 'Maggi Bread and Eggs';
    this.description = [
      `Another day, another dawn, <em>yet again</em> you've got to whip up some quick breakfast to satisfy the pangs of Hunger, which grows nastier teeth by the day to chew on the insides of your Stomach. Your Stomach then cries out in pain sending the unhappiest tears it can think of through the nerves over to your Brain, which is still hungover and wants your Stomach to just shut up for once so that it can have peace in the overworked life that it has. ;(`,
      `Then, somehow, you've landed on this here page where you see noods and eggs, and your Mouth just drools all over your pillow since your Brain hasn't helped you get up being the lazy bum that it is. But you see the golden glow of the Maggi and the bright, yellow circle of delight that a sunny-side up egg seasoned in the water of the noodles. And you find
      yourself teleported into your kitchen, with your Brain all revved up to
      amaze your Stomach, screaming, <em>"LET'S GO PEOPLE"</em> to all the
      motor skills it can muster from your exercise-deprived, uncoordinated
      mess of a body.`,
    ];
    this.ingredients = [
      'Maggi (or any ready-to-make noodles with its own seasoning packet)',
      'Egg(s)',
      'Salt',
      'Oregano (optional)',
    ];
    this.steps = [
      `Add water to a bowl and add the indicated amount of water by the noodle packet's instructions.`,
      `Add about half a cup extra water, and sprinkle some salt to compensate
      the extra water, since the dilution takes away some flavor from the
      noodles.`,
      `Add the noodle seasoning, the noodles and light/switch on the stove
      and let the noodles cook until they become soft and to the point where
      they're almost cooked.`,
      `Crack open the egg carefully to get a sunny side up egg on top of the
          noodles.`,
      `You can sprinkle some salt over the egg, and some oregano if you've
          some around.`,
      `Ensure that the egg is covered by the noodle water so that it gets
          seasoned with it.`,
      `Cover the noodles with a lid so that the steam cooks the egg.`,
      `After a while you should have a well-noodle-seasoned delicious egg and
          noodles ready to gorge yourself on!`,
    ];

    this.imageLink = new ImageLink(
      'https://images.unsplash.com/photo-1603033172872-c2525115c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      'Image of Maggi and Eggs',
      '/recipe/maggi-and-eggs'
    );
  }
}

export const BoiledEggs: IRecipe = {
  title: 'Boiled Eggs',
  description: [
    'This recipe is a bit of a mess, but it is a bit of a mess.',
    'It is a bit of a mess, but it is a bit of a mess.',
  ],
  ingredients: [
    'Eggs',
    'Brown bread',
    'Oregano (or)',
    'Chilli flakes / powder',
  ],
  steps: [],
  imageLink: new ImageLink(
    'https://images.unsplash.com/photo-1551014029-03820d0b88f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    'Image of Boiled Eggs',
    '/recipe/boiled-eggs'
  ),
};
