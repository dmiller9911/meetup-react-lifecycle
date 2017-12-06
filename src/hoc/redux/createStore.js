export function createStore(reducer) {
  let currentState;
  const currentReducer = reducer;
  const currentListeners = [];

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    let isSubscribed = true;
    currentListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      isSubscribed = false;
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach(l => l());
    return action;
  }

  dispatch({ type: '@@INIT' });

  return {
    getState,
    subscribe,
    dispatch,
  };
}
