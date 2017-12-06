let messages = [];
let listeners = [];

export function createLogger(label) {
  return (message) => {
    messages = [...messages, { label, message }];
    notify();
  };
}

export function listen(callback) {
  if (listeners.includes(callback)) {
    return;
  }
  listeners = [...listeners, callback];
  return messages;
}

export function removeListener(callback) {
  const index = listeners.findIndex(callback);
  if (index === -1) {
    return;
  }
  listeners.splice(index, 1);
}

function notify() {
  requestIdleCallback(() => {
    listeners.forEach(l => l(messages));
  });
}

export function clear() {
  messages = [];
  notify();
}
