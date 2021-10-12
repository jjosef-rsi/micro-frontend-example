export function publish(topic, data) {
  var evt = new CustomEvent(topic, {
    detail: { topic, data },
  });
  document.body.dispatchEvent(evt);
}

const createHandler = (handler) => {
  function h(evt) {
    const { data } = evt.detail;
    handler(data);
  }

  return h;
};

export function subscribe(topic, handler) {
  const i = createHandler(handler);
  document.body.addEventListener(topic, i);
  return i;
}

export function unsubscribe(topic, handler) {
  document.body.removeEventListener(topic, handler);
}