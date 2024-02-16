import styled from 'styled-components';
import Body from '../components/layout/Body';
import HomeInfo from '../components/molecules/HomeInfo';

const MainStyled = styled.main`
  background-color: #343131;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Body>
      <MainStyled>
      <HomeInfo />
      </MainStyled>
    </Body>
  );
}
