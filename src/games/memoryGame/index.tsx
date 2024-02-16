import { useState } from 'react';
import './memoryGame.css';
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
import Modal from '../../components/Modal';

const cards = [
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
];

function MemoryGame() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [isGameComplete, setGameComplete] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    cardType: string
  ) => {
    if (isGameComplete || matchedPairs.includes(cardType)) {
      return;
    }

    const currentTarget = e.currentTarget;

    setSelectedCards((prev) => {
      return [...prev, cardType];
    });

    // logic to toggle class or update class name
    currentTarget.querySelector('img')?.classList.add('flipped');

    if (selectedCards.length === 1) {
      if (selectedCards[0] === cardType) {
        setMatchedPairs((prev) => {
          return [...prev, cardType];
        });

        document
          .querySelectorAll(`img[alt="${selectedCards[0]}"]`)
          .forEach((card) => {
            card.classList.add('matched');
          });

        setSelectedCards([]);

        if (matchedPairs.length === 9) {
          setGameComplete(true);
        }
      } else {
        setTimeout(() => {
          document
            .querySelectorAll(`img[alt="${selectedCards[0]}"]`)
            .forEach((flippedCard) => {
              flippedCard.classList.remove('flipped');
            });

          currentTarget.querySelector('img')?.classList.remove('flipped');

          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const restart = () => {
    setSelectedCards([]);
    setMatchedPairs([]);
    setGameComplete(false);

    document.querySelectorAll('.flipped').forEach((card) => {
      card.classList.remove('flipped');
    });

    document.querySelectorAll('.matched').forEach((card) => {
      card.classList.remove('matched');
    });
  };

  return (
    <>
      {isGameComplete && (
        <Modal setIsOpen={setGameComplete}>
          <h2>Congratulations! You won!</h2>
          <button onClick={restart}>Do you want to play more?</button>
        </Modal>
      )}

      <div className="memory-game-containter">
        <div className="board">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                onClick={(e) => handleClick(e, card.type)}
                className="card"
              >
                <img src={card.image} alt={card.type} className="figures" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
