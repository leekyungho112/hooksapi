import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px 20px;
  h1 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
    color: #ddbea9;
  }
`;

const List = ({ name, children }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <ul>{children}</ul>
    </Container>
  );
};

export default List;
