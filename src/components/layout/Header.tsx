import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';

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
    `;

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <ul>
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
