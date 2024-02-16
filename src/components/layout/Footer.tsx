import styled from "styled-components"
import { colors } from "../../styles";

const FooterStyled = styled.footer`
  background-color: ${colors.primary};
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterStyled>
        <p>&copy; 2021 Game Center</p>
    </FooterStyled>
  )
}
