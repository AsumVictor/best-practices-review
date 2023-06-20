import createElement from './CreateElement';
import {
  SelectElementFromDOM,
  SelectMultipleElementsFromDOM,
} from './variables';
import {
  addTodo, removeTodo, editTodo, saveEdit,
} from './TodosOperations';
import { elEvent } from './DocumentEvents';
import { getItemsFromStorage } from './Storage';
import switchButtons from './switchAddAndSaveBtn';
import {
  updateCompleteStatus,
  clearCompeleted,
} from './TodoCompleteOperations';

const DisplayTodoListOnDOM = () => {
  let todos;
  if (!getItemsFromStorage('todos')) {
    todos = [];
  } else {
    todos = getItemsFromStorage('todos');
  }

  const TodoContainer = SelectElementFromDOM('.todos');
  TodoContainer.innerHTML = '';

  todos.forEach((todosItem) => {
    let checkBox;
    if (todosItem.completed) {
      checkBox = 'checked';
    } else {
      checkBox = null;
    }
    const todo = createElement(
      'div',
      'todo',
      null,
      null,
      `
    <input type="checkbox" name="completed" class='checkbox' id="completed${todosItem.index}" ${checkBox}>
    <label for='completed${todosItem.index}' class="discription">${todosItem.description}</label>
    <i class="fa fa-pencil edit" aria-hidden="true"></i>
    <i class="delete fa fa-trash " aria-hidden="true"></i>
    `,
    );
    todo.classList.add('todo');
    TodoContainer.appendChild(todo);
  });

  const addTodoBtn = SelectElementFromDOM('.add-todo-btn');
  const input = SelectElementFromDOM('input');
  const deleIcons = SelectMultipleElementsFromDOM('.delete');
  const checkboxs = SelectMultipleElementsFromDOM('.checkbox');
  const editButtons = SelectMultipleElementsFromDOM('.edit');
  const saveEditBtn = SelectElementFromDOM('.save');
  const clearComplteBtn = SelectElementFromDOM('.clear-btn');

  elEvent(addTodoBtn, 'click', () => {
    if (input.value.trim() !== '') {
      addTodo();
      DisplayTodoListOnDOM();
    }
  });

  elEvent(input, 'keypress', (event) => {
    // if key is equall to enter
    if (event.key === 'Enter') {
      event.preventDefault();
      addTodo();
      DisplayTodoListOnDOM();
    }

    if (input.value.trim() === '') {
      addTodoBtn.classList.remove('active');
    } else {
      addTodoBtn.classList.add('active');
    }
  });

  elEvent(input, 'keyup', () => {
    if (
      input.value.trim() !== ''
      && !saveEditBtn.classList.contains('active')
    ) {
      addTodoBtn.classList.add('active');
    } else {
      addTodoBtn.classList.remove('active');
    }
  });

  deleIcons.forEach((deleIcon, index) => {
    elEvent(deleIcon, 'click', () => {
      removeTodo(index);
      DisplayTodoListOnDOM();
    });
  });

  editButtons.forEach((editButton, index) => {
    elEvent(editButton, 'click', () => {
      switchButtons('edit');
      editTodo(index);
      DisplayTodoListOnDOM();
    });
  });

  elEvent(saveEditBtn, 'click', () => {
    saveEdit();
    switchButtons('add');
    DisplayTodoListOnDOM();
  });

  checkboxs.forEach((checkbox, index) => {
    elEvent(checkbox, 'click', () => {
      updateCompleteStatus(index);
      DisplayTodoListOnDOM();
    });
  });

  elEvent(clearComplteBtn, 'click', () => {
    clearCompeleted();
    DisplayTodoListOnDOM();
  });
};

export default DisplayTodoListOnDOM;
