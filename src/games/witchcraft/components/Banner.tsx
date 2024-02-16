import styled from 'styled-components';
import scaredCat from '../assets/scared-cat.svg';
import witchhat from '../assets/witchhat.svg';
import bookBlue from '../assets/book-blue.svg';
import bookGolden from '../assets/book-golden.svg';
import bats from '../assets/bats.svg';
import elixir from '../assets/elixir.svg';
import elixirPrep from '../assets/elixir-prep.svg';
import candels from '../assets/candels.svg';
import banner from '../assets/banner.svg';
import { colors } from '../styles';

const BannerStyled = styled.img`
  width: 100vw;
  object-fit: cover;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: -1;
`;
const GraphicsStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  img {
    position: absolute;
  }
  img:nth-child(1) {
    top: 10%;
    left: 7%;
    box-shadow: 0px 0px 10px 5px ${colors.purpleDark};
    background-color: ${colors.purpleDark};
    border-radius: 50%;
  }

  img:nth-child(2) {
    top: 35%;
    left: 20%;
    box-shadow: 0px 0px 10px 5px ${colors.purpleDark};
    background-color: ${colors.purpleDark};
    border-radius: 47%;
  }

  img:nth-child(3) {
    top: 70%;
    left: 85%;
  }
  img:nth-child(4) {
    top: 10%;
    left: 80%;
    transform: rotate(45deg);
    box-shadow: 0px 0px 10px 5px ${colors.orange};
    width: 200px;
    border-radius: 50%;
    background-color: ${colors.orange};
    opacity: 0.8;
  }

  img:nth-child(5) {
    top: 80%;
    left: 12%;
    transform: rotate(333deg);
  }

  img:nth-child(6) {
    top: 150%;
    left: 60%;
  }
  img:nth-child(7) {
    top: 120%;
    left: 10%;
    rotate: 45deg;
  }
  img:nth-child(8) {
    top: 120%;
    left: 40%;
    width: 300px;
  }
`;

export default function Banner() {
  return (
    <>
      <GraphicsStyled>
        <img src={witchhat} alt="Witchcraft" />
        <img src={scaredCat} alt="Witchcraft" />
        <img src={candels} alt="Witchcraft" />
        <img src={bats} alt="Witchcraft" />
        <img src={bookBlue} alt="Witchcraft" />
        <img src={bookGolden} alt="Witchcraft" />
        <img src={elixir} alt="Witchcraft" />
        <img src={elixirPrep} alt="Witchcraft" />
      </GraphicsStyled>
      <BannerStyled src={banner} alt="banner" />
    </>
  );
}
