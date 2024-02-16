import flamenco from './assets/flamenco.svg';
import pizza from './assets/pizza.svg';
import cocktail from './assets/cocktail.svg';
import palma from './assets/palma.svg';
import alien from './assets/alien.svg';
import smoothie from './assets/smoothie.svg';
import icecream from './assets/icecream.svg';
import headphones from './assets/headphones.svg';
import controller from './assets/controller.svg';
import cake from './assets/cake.svg'; 

export interface Card {      
  id: number;
  type: string;
  image: string;
}

export default [
  { id: 1, type: 'flamenco', image: flamenco },
  { id: 2, type: 'pizza', image: pizza },
  { id: 3, type: 'cocktail', image: cocktail },
  { id: 4, type: 'palma', image: palma },
  { id: 5, type: 'alien', image: alien },
  { id: 6, type: 'smoothie', image: smoothie },
  { id: 7, type: 'icecream', image: icecream },
  { id: 8, type: 'headphones', image: headphones },
  { id: 9, type: 'controller', image: controller },
  { id: 10, type: 'cake', image: cake }, 
  { id: 11, type: 'flamenco', image: flamenco },
  { id: 12, type: 'pizza', image: pizza },
  { id: 13, type: 'cocktail', image: cocktail },
  { id: 14, type: 'palma', image: palma },
  { id: 15, type: 'alien', image: alien },
  { id: 16, type: 'smoothie', image: smoothie },
  { id: 17, type: 'icecream', image: icecream },
  { id: 18, type: 'headphones', image: headphones },
  { id: 19, type: 'controller', image: controller },
  { id: 20, type: 'cake', image: cake }, 
] as Card[];