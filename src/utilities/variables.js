export const SelectElementFromDOM = (element) => {
  const el = document.querySelector(element);
  return el;
};

export const SelectMultipleElementsFromDOM = (element) => {
  const el = document.querySelectorAll(element);
  return el;
};

export default SelectElementFromDOM;