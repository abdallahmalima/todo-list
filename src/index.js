import './style.css';
import addTodo from './modules/createTodo';
import renderTodos from './modules/renderTodos';


const createTodoForm = document.querySelector('#todo-form');
renderTodos();

createTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(createTodoForm);
  renderTodos();
});
