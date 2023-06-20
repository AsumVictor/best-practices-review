const DocumentEvent = (eventType, event) => {
  document.addEventListener(eventType, event);
};

export const elEvent = (el, eventType, event) => {
  el.addEventListener(eventType, event);
};

export default DocumentEvent;
