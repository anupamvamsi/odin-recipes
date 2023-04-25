export interface IRecipe {
  title: string;
  description: string;
  ingredients: Array<string>;
  steps: Array<string>;
}

export class BreadAndEggs implements IRecipe {
  title: 'Toasted Bread and Eggs';
  description: `It's a bright, sunny morning - and you have a gnawing hunger. But alas! You have not the time to inspire the chef in you to wake up and become the best chef like no one ever was. Gotta make them all? But your Hunger says it's not got the time for you to role play Mash Ketchup for 20-odd years on television all the time saving Pikachow from Steam Rocket. What can you make in ten minutes and on which you wouldn't Choke(m)on?

  The answer is right here on this page - toast some crispy, buttery bread optionally with fragrant oregano and whip up some sunny side up eggs with runny yolk, rich and thick like creamy soup which you'd scoop up with the crackling bread, to end up on your tongue which'd take you on a ride ending with you craving and wanting for more!`;
  ingredients: [
    'Eggs',
    'Brown bread',
    'Oregano (or)',
    'Chilli flakes / powder',
    'Pepper powder',
    'Salt',
    '(Salted) Butter'
  ];
  steps: [
    'Smear butter on bread slices as per your taste and optionally sprinkle oregano or a combination of pepper and salt, else if you are using salted butter, you might not really want the extra seasoning.',
    'Place the bread on a pan on medium heat and toast it until the bread is crisp to a degree of your liking.',
    'While the bread is being toasted, you can set up a (circular) pan for the eggs.',
    'Coat the pan with butter and optionally sprinkle salt or oregano to season the underside of the egg(s) as well.',
    'Light up the pan and once the butter bubbles, you can crack open the egg(s) and make sure to take care not to break the yolk for a perfect sunny side up egg.',
    'Sprinkle oregano or a combination of chilli powder/flakes, salt and pepper, the ratios varying to your liking.',
    'Once you feel the egg is cooked, you can jiggle the egg on to the toasted bread (it becomes easy because of the butter coating) or place it on the side.',
    'However if you want a runny yolk, you may want to not let the egg cook for much longer.',
    'Voilà, you have a delicious meal ready!'
  ];
}
