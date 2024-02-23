import { useEffect, ReactElement } from 'react';
import Game from  './witchcraftGame/dude/dude';

import './styles/phaser-styles.css';
import Body from '../../components/layout/Body';

function Witchcraft(): ReactElement {
  useEffect(() => {
    const game = Game();

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <Body>
      <div className="phaser-container">
        <div id="phaser" />
      </div>
    </Body>
  );
}

export default Witchcraft;

/* import styled from 'styled-components';
import Body from '../../components/layout/Body';
import Banner2 from './components/Banner2';
import { Game } from './witchcraftGame/Game';

const WelcomeToWitchcraftStyled = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;


export default function Witchcraft() {
  return (
    <Body> 
       <WelcomeToWitchcraftStyled>
        <Banner2 />
      </WelcomeToWitchcraftStyled> 
      <Game />
    </Body>
  );
}
 */
