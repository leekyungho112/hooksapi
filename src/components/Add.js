import React, { useState } from 'react';
import { ADD } from '../action';
import { useDispatch } from '../context';
import styled from 'styled-components';

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;
const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  background: #6b705c;
  &::placeholder {
    color: white;
  }
`;
const Add = () => {
  const [newToDo, setNewToDo] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo('');
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Write to do"
        onChange={onChange}
        value={newToDo}
      />
    </Form>
  );
};

export default Add;
