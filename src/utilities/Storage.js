export const getItemsFromStorage = (itemName) => JSON.parse(localStorage.getItem(itemName));

export const saveItemsToStorage = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};
