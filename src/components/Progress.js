import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #ddbea9;
  }
  progress {
    border: none;
  }
  progress::-webkit-progress-bar {
    background-color: gray;
    height: 10px;
  }
  progress::-webkit-progress-value {
    background: linear-gradient(to left, #b7b7a4, #a5a58d);
  }
`;

const Progress = ({ todo, complete }) => {
  const per = Math.floor(
    (complete.length / (todo.length + complete.length)) * 100
  );

  return (
    <Container>
      <span>{`Mission Complete ${todo.length}`}</span>
      <label htmlFor="progress">
        <span role="img" aria-label="Waxing Gibbous Moon"></span>
      </label>
      <progress id="progress" max="100" value={per}></progress>
      <span role="img" aria-label="full moon"></span>
    </Container>
  );
};

export default Progress;
