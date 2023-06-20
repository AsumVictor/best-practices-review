import { SelectElementFromDOM } from './variables';

const save = SelectElementFromDOM('.save');
const add = SelectElementFromDOM('.add-todo-btn');

const switchButtons = (mode) => {
  if (mode === 'edit') {
    save.classList.add('active');
    add.classList.remove('active');
  }
  if (mode === 'add') {
    save.classList.remove('active');
  }
};

export default switchButtons;
