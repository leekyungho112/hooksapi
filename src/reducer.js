import { v4 as uuidv4 } from 'uuid';
import { ADD, BACK, COMPLETE, DEL, EDIT } from './action';

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case EDIT:
      const etarget = state.toDos.find((todo) => todo.id === action.id);
      const rest = state.toDos.filter((toDo) => toDo.id !== action.id);
      return {
        ...state,
        toDos: [{ ...etarget, text: action.payload }, ...rest],
      };

    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((todo) => todo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    case BACK:
      const back = state.completed.find((todo) => todo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter((todo) => todo.id !== action.payload),
        toDos: [...state.toDos, { ...back }],
      };
    default:
      throw new Error();
  }
};

export default reducer;
