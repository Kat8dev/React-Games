import styled from 'styled-components';
import Body from '../../components/layout/Body';
import Banner2 from './components/Banner2';

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
    </Body>
  );
}
