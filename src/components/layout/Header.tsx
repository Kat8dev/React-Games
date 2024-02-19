import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';
import { useState } from 'react';

const HeaderStyled = styled.header`
  background-color: ${colors.primary};
  color: white;
  padding: 1rem;
  border-bottom: 5px solid ${colors.secondary};
  nav {
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        a {
          color: white;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
          &.active {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      ul {
        flex-direction: column;

        li {
          margin-bottom: 0.5rem;
        }

        display: none;
      }
    }
  }

  .visible {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  width: 100vw;
  :nth-child(1) {
    color: inherit;
    text-decoration: none;
    margin-left: 1.7rem;
    font-family: 'Lobster', cursive;
  }
  :nth-child(2) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderStyled>
      <nav>
        <HamburgerIcon>
          <Link to="/">GAMES</Link>
          <div onClick={toggleMenu}>&#9776;</div>
        </HamburgerIcon>

        <ul className={`${menuOpen && 'visible'}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/memory-game">Memory Game</NavLink>
          </li>
          <li>
            <NavLink to="/quiz-game">Quiz Game</NavLink>
          </li>
          <li>
            <NavLink to="/witchcraft">Witchcraft</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
