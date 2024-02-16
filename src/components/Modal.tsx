import './components.css';

interface ModalProps {  
  setIsOpen: (value: boolean) => void;
  children?: React.ReactNode;
}

export default function Modal({setIsOpen, children}: ModalProps) {
  return (
    <>
        <div className="overlay" onClick={()=> setIsOpen(false)}></div>
        <div className='modal'>{children}</div>      
    </>
  )
}
