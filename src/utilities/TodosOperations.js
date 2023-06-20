import { saveItemsToStorage, getItemsFromStorage } from './Storage';
import { SelectElementFromDOM } from './variables';

// Add new todo list
export const saveTodo = (arrayItem) => {
  const listTodo = arrayItem.map((todo, index) => ({
    ...todo,
    index: index + 1,
  }));

  return listTodo;
};

let state = null;

export const addTodo = () => {
  let todos;
  if (!getItemsFromStorage('todos')) {
    todos = [];
  } else {
    todos = getItemsFromStorage('todos');
  }
  const input = SelectElementFromDOM('input');
  const newTodo = {
    description: input.value,
    completed: false,
  };

  todos.push(newTodo);
  const orderedTodo = saveTodo(todos);
  saveItemsToStorage('todos', orderedTodo);
  input.value = '';
};

// Remove todo list
export const removeTodo = (index) => {
  const todos = getItemsFromStorage('todos');
  const newList = todos.filter((todo) => todo.index !== index + 1);

  const orderedList = saveTodo(newList);
  saveItemsToStorage('todos', orderedList);
};

export const editTodo = (index) => {
  const todos = getItemsFromStorage('todos');
  const input = SelectElementFromDOM('input');
  input.value = todos[index].description;
  state = index;
};

export const saveEdit = () => {
  const todos = getItemsFromStorage('todos');
  const input = SelectElementFromDOM('input');
  todos[state] = {
    ...todos[state],
    description: input.value,
  };

  saveItemsToStorage('todos', todos);
  state = null;
  input.value = '';
};
