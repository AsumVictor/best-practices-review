const createElement = (element, id, actionType, action, content) => {
  const el = document.createElement(element);
  el.innerHTML = content;
  el.id = id;
  el.addEventListener(`${actionType}`, action);
  return el;
};

export default createElement;