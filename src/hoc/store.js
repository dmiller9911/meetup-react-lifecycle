import { createStore } from './redux';

const createAction = (type) => {
  const action = () => ({ type });
  action.toString = () => type;
  return action;
};

export const increment = createAction({ type: 'INCREMENT' });
export const decrement = createAction({ type: 'DECREMENT' });

function rootReducer(state = { count: 0 }, { type }) {
  switch (type) {
    case increment.toString():
      return { ...state, count: state.count + 1 };
    case decrement.toString():
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const store = createStore(rootReducer);
