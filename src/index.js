import './style.css';
import DocumentEvent from './utilities/DocumentEvents';
import DisplayTodoListOnDOM from './utilities/DisplayElement';

DocumentEvent('DOMContentLoaded', () => {
  DisplayTodoListOnDOM();
});
