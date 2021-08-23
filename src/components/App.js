import React from 'react';
import Add from './Add';
import { useState } from '../context';
import List from './List';
import ToDo from './ToDo';
import Bgvideo from './Bgvideo';
import styled from 'styled-components';
import Progress from './Progress';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Item = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div`
  color: white;
  position: absolute;
  font-size: 30px;
  z-index: 1;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function App() {
  const { toDos, completed } = useState();

  return (
    <Container>
      <Title>Your Task</Title>
      <Bgvideo />
      <Add />
      <Progress todo={toDos} complete={completed} />
      <Item>
        <List name={toDos.length !== 0 ? 'ToDos' : ''}>
          {toDos.map((todo) => (
            <ToDo key={todo.id} id={todo.id} text={todo.text} />
          ))}
        </List>
        <List name={completed.length !== 0 ? 'Completed' : ''}>
          {completed.map((todo) => (
            <ToDo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isCompleted={true}
            />
          ))}
        </List>
      </Item>
    </Container>
  );
}

export default App;
