import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
  z-index: 0;
`;

const Bgvideo = () => {
  return (
    <Container>
      <iframe
        title="background"
        src={
          'https://www.youtube.com/embed/C9LT9iC7ST0?autoplay=1&mute=1&controls=1'
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default Bgvideo;
