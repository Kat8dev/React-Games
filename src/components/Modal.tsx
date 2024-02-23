import styled from 'styled-components';

const OverlayStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 10vh;
    background-color: rgba(27, 25, 25, 0.5);    
    z-index: 1000;
`;
const ModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #d3cece;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 40px #c150b2;
    z-index: 1000;
`;

interface ModalProps {  
  setIsOpen: (value: boolean) => void;
  children?: React.ReactNode;
}

export default function Modal({setIsOpen, children}: ModalProps) {
  return (
    <>
        <OverlayStyled onClick={()=> setIsOpen(false)}></OverlayStyled>
        <ModalStyled>{children}</ModalStyled>
    </>
  )
}
