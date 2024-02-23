import styled from 'styled-components';
import { colors } from '../../styles';

const HomeInfoStyled = styled.div`
  color: ${colors.hackerGreen};
  .fakeScreen {
    background-color: #151515;
    min-width: 280px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 5px solid ${colors.hackerGreen};
    border-top: 20px solid ${colors.hackerGreen};
  }

  p {
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;   
    white-space: nowrap;
    overflow: hidden;
    width: 0;
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  .line1 {
    color: #9cd9f0;
    -webkit-animation: type 0.5s 1s steps(20, end) forwards;
    -moz-animation: type 0.5s 1s steps(20, end) forwards;
    -o-animation: type 0.5s 1s steps(20, end) forwards;
    animation: type 0.5s 1s steps(20, end) forwards;
  }

  .cursor1 {
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
  }

  .line2 {
    color: #cdee69;
    -webkit-animation: type 0.5s 4.25s steps(20, end) forwards;
    -moz-animation: type 0.5s 4.25s steps(20, end) forwards;
    -o-animation: type 0.5s 4.25s steps(20, end) forwards;
    animation: type 0.5s 4.25s steps(20, end) forwards;
  }

  .cursor2 {
    -webkit-animation: blink 1s 5.25s 2 forwards;
    -moz-animation: blink 1s 5.25s 2 forwards;
    -o-animation: blink 1s 5.25s 2 forwards;
    animation: blink 1s 5.25s 2 forwards;
  }

  .line3 {
    color: #e09690;
    -webkit-animation: type 0.5s 7.5s steps(20, end) forwards;
    -moz-animation: type 0.5s 7.5s steps(20, end) forwards;
    -o-animation: type 0.5s 7.5s steps(20, end) forwards;
    animation: type 0.5s 7.5s steps(20, end) forwards;
  }

  .cursor3 {
    -webkit-animation: blink 1s 8.5s 2 forwards;
    -moz-animation: blink 1s 8.5s 2 forwards;
    -o-animation: blink 1s 8.5s 2 forwards;
    animation: blink 1s 8.5s 2 forwards;
  }

  .line4 {
    color: #fff;
    -webkit-animation: type 0.5s 10.75s steps(20, end) forwards;
    -moz-animation: type 0.5s 10.75s steps(20, end) forwards;
    -o-animation: type 0.5s 10.75s steps(20, end) forwards;
    animation: type 0.5s 10.75s steps(20, end) forwards;
  }

  .cursor4 {
    -webkit-animation: blink 1s 11.5s infinite;
    -moz-animation: blink 1s 8.5s infinite;
    -o-animation: blink 1s 8.5s infinite;
    animation: blink 1s 8.5s infinite;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes type {
    to {
      width: 17em;
    }
  }

  @-moz-keyframes type {
    to {
      width: 17em;
    }
  }

  @-o-keyframes type {
    to {
      width: 17em;
    }
  }

  @keyframes type {
    to {
      width: 17em;
    }
  }
`;

export default function HomeInfo() {
  return (
    <HomeInfoStyled>    
      
      <div className="fakeScreen">
        <p className="line1">
          &#91;&nbsp;&ldquo;Welcome to my Game Center!&rdquo;,
          <span className="cursor1">_</span>
        </p>
        <p className="line2">
          &nbsp;&nbsp;&ldquo;Discover fun & easy games&rdquo;,
          <span className="cursor2">_</span>
        </p>
        <p className="line3">
          &nbsp;&nbsp;&ldquo;Let's play together!&rdquo;&nbsp;&#93;
          <span className="cursor3">_</span>
        </p>
        <p className="line4">
          {'>'}
          <span className="cursor4">_</span>
        </p>
      </div>
    </HomeInfoStyled>
  );
}
