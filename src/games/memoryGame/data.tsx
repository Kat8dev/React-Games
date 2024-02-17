import flamenco from './assets/flamenco.png';
import pizza from './assets/pizza.png';
import cocktail from './assets/cocktail.png';
import palma from './assets/palma.png';
import alien from './assets/alien.png';
import smoothie from './assets/smoothie.png';
import icecream from './assets/icecream.png';
import headphones from './assets/headphones.png';
import controller from './assets/controller.png';
import cake from './assets/cake.png'; 

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