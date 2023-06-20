import { saveItemsToStorage, getItemsFromStorage } from './Storage';
import { saveTodo } from './TodosOperations';

export const updateCompleteStatus = (index) => {
  const todos = getItemsFromStorage('todos');

  todos[index] = {
    ...todos[index],
    completed: !todos[index].completed,
  };

  saveItemsToStorage('todos', todos);
};

export const clearCompeleted = () => {
  const todos = getItemsFromStorage('todos');
  const newList = todos.filter((todo) => todo.completed !== true);

  const orderedList = saveTodo(newList);
  saveItemsToStorage('todos', orderedList);
};