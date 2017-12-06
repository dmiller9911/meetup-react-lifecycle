import { Provider, connect } from './redux';
import { decrement, increment, store } from './store';
import React from 'react';
import { styles } from './hoc.styles';

export const HOC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

function mapStateToProps({ count }) {
  return { count };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

const withCounterState = connect(mapStateToProps, mapDispatchToProps);

export const Counter = withCounterState((props) => {
  return (
    <div style={styles.app}>
      <button style={styles.button} onClick={props.decrement}>
        -
      </button>
      <div style={styles.count}>
        {props.count}
      </div>
      <button style={styles.button} onClick={props.increment}>
        +
      </button>
    </div>
  );
});
