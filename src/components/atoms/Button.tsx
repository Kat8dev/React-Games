import styled from 'styled-components';
import { colors } from '../../styles';

export const Button = styled.button`
  padding: 1rem;
  border: 0;
  background: ${colors.secondary}; 
  transition: all 0.5s ease;
  font-size: 22px;
  border-radius: 10px;
  color: #8e9899;
  cursor: pointer;
  box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
