import styled from 'styled-components';
import moon from '../assets/moon.mp4';
import witchBG from '../assets/witchBG.svg';
import { useEffect, useRef } from 'react';

const BannerStyled = styled.img`
  width: 100vw;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const VideoContainer = styled.div`
  video {
    max-width: 500px;
    height: auto;
  }
  @media (max-width: 500px) {
    video {
      width: 150px; 
    }
  }

  @media (min-width: 501px) and (max-width: 1200px) {
    video {
      width: 250px; 
    }
  }

  @media (min-width: 601px) {
    video {
      width: 300px; 
    }
  }
  @media (min-width: 701px) {
    video {
      width: 350px; 
    }
  }
  @media (min-width: 901px) {
    video {
      width: 400px; 
    }
  }

  @media (min-width: 1201px) {
    video {
      width: 800px;
    }
  }
`;

export default function Banner2() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.5;
        }
      }, []);
  return (
    <div>
      <BannerStyled src={witchBG} alt="witchBG" />
      <VideoContainer>
        <video
         ref={videoRef}
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            borderRadius: '50%',
            boxShadow: '0px 0px 10px 5px #6b5b95',
            marginTop: '20px',
          }}
        >
          <source src={moon} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </div>
  );
}
