import { useEffect, useState } from 'react';
import './memoryGame.css';
import Modal from '../../components/Modal';
import data, { Card } from './data';

function MemoryGame() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [isGameComplete, setGameComplete] = useState(false);
  const [hasRestarted, setHasRestarted] = useState(false);

  // Shuffle the cards array when the component mounts
  useEffect(() => {
    document.querySelectorAll('.flipped').forEach((card) => {
      card.classList.remove('flipped');
    });

    document.querySelectorAll('.matched').forEach((card) => {
      card.classList.remove('matched');
    });
    const shuffledCards = shuffleArray([...data]);
    setMatchedPairs([]);
    setSelectedCards([]);
    setGameComplete(false);
    setShuffledCards(shuffledCards);
  }, [hasRestarted]);

  const [cards, setShuffledCards] = useState([...data]);

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
        }, 500);
      }
    }
  };

  const restart = () => {
    setHasRestarted((prev) => !prev);
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

function shuffleArray(array: Card[]) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
