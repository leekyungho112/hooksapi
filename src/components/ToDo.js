import React, { useState } from 'react';
import { BACK, COMPLETE, DEL, EDIT } from '../action';
import { useDispatch } from '../context';
import styled from 'styled-components';
import {
  IoCheckboxOutline,
  IoArrowUndoOutline,
  IoTrashOutline,
  IoCutOutline,
} from 'react-icons/io5';

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
const Text = styled.span`
  color: #cb997e;
  padding-right: 3px;
`;
const Button = styled.button`
  background: #b7b7a4;
  opacity: 0.7;
  border-radius: 0px 5px 0px;
  padding: 5px 5px;
  color: #6b705c;
  margin: 2px;
  border: none;
`;
const EditForm = styled.form``;

const EditInput = styled.input`
  border: none;
  border-radius: 4px;
`;

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(text);
  const [editing, setEditing] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT, payload: edit, id });
    setEdit('');
    setEditing(true);
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEdit(value);
  };
  const editHandler = () => {
    setEditing(false);
  };
  return (
    <Item key={id}>
      <Text>{text}</Text>
      {!isCompleted &&
        (editing ? (
          <Button onClick={editHandler}>
            <IoCutOutline />
          </Button>
        ) : (
          <EditForm onSubmit={onSubmit}>
            <EditInput type="text" onChange={onChange} value={edit} />
          </EditForm>
        ))}
      <>
        <Button onClick={() => dispatch({ type: DEL, payload: id })}>
          <IoTrashOutline />
        </Button>

        <Button
          onClick={() =>
            dispatch({ type: isCompleted ? BACK : COMPLETE, payload: id })
          }
        >
          {isCompleted ? <IoArrowUndoOutline /> : <IoCheckboxOutline />}
        </Button>
      </>
    </Item>
  );
};

export default ToDo;
