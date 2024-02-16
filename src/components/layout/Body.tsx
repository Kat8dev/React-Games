//import Footer from './Footer';
import Header from './Header';

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <>
      <Header />
      {children}
     {/*  <Footer /> */}
    </>
  );
}
