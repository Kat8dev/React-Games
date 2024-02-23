import styled from 'styled-components';
import Body from '../components/layout/Body';
import { HomeInfo } from '../components/molecules';

const MainStyled = styled.main`
  background-color: #343131;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .info-wrapper { 
    margin-top: 100px;
  }
`;

export default function Home() {
  return (
    <Body>
      <MainStyled>
        <div className='info-wrapper'>
          <HomeInfo />
        </div>
      </MainStyled>
    </Body>
  );
}
