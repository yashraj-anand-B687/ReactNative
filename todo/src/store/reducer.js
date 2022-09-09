import {Add, Complete, deletee, editt} from './actionType';

const initialState = [];

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add:
      return [
        ...state,
        {text: action.payload, complete: false, key: Math.random().toString()},
      ];
    case Complete:
      return state.map(todo =>
        todo.key === action.payload
          ? {...todo, complete: !todo.complete}
          : todo,
      );
    case deletee:
      return state.filter(todo => todo.key !== action.payload);
    case editt:
      return state.map(todo =>
        todo.key === action.payload.id
          ? {...todo, text: action.payload.text}
          : todo,
      );
  }
};
