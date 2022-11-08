import './style.css';
import addTodo from './modules/createTodo';
import renderTodos from './modules/renderTodos';
import clearCompleted from './modules/clearCompletedTodo';

const createTodoForm = document.querySelector('#todo-form');
const clearCompletedBtn = document.querySelector('.todo-clear');

renderTodos();

clearCompletedBtn.addEventListener('click', () => {
  clearCompleted();
});

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(createTodoForm);
});
