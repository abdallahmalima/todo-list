import renderTodos from './renderTodos';
import getTodos from './todos';
import saveTodo from './saveTodo';

const showUpdateUI = (target) => {
  const background = '#e7e5b0';
  const parentList = target.closest('li');
  parentList.style.paddingBlock = '3px';
  parentList.style.background = background;
  const description = parentList.querySelector('p').textContent;
  parentList.querySelector('p').remove();
  parentList.querySelector('.trash-icon').style.display = 'block';
  parentList.querySelector('.three-dot-icon').style.display = 'none';
  const todoContentContiner = parentList.querySelector('div');
  const form = document.createElement('form');
  form.setAttribute('id', 'todo-form');
  form.className = 'todo-item-form';
  const input = document.createElement('input');
  input.setAttribute('name', 'description');
  input.setAttribute('autofocus', 'true');
  input.setAttribute('value', description);
  input.style.background = background;
  form.setAttribute('id', 'todo-form');
  form.appendChild(input);
  todoContentContiner.appendChild(form);
};

const validated = (value) => {
  const description = value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: 1 };
  }
  return null;
};

const updateToDoTest = (id, description) => {
  const todos = getTodos();
  const updatedTodo = validated(description);
  if (updatedTodo === null) return;
  const index = id;
  todos[index - 1].description = updatedTodo.description;
  saveTodo(todos);
  renderTodos();
};

const update = (e) => {
  e.preventDefault();
  updateToDoTest(e.target.treeDotIcon.closest('svg').id, e.target.children[0].value);
};

const addEventListenerForUpdateForm = ({ target }) => {
  showUpdateUI(target);
  const updateTodoForm = document.querySelector('.todo-item-form');
  updateTodoForm.treeDotIcon = target;
  updateTodoForm.addEventListener('submit', update);
};

const addEventListenerForShowUpdateUI = (treeDotIcon) => {
  treeDotIcon.addEventListener('click', addEventListenerForUpdateForm);
};
const registerUpdateEventListener = () => {
  const treeDotIcons = document.querySelectorAll('.three-dot-icon');
  treeDotIcons.forEach(addEventListenerForShowUpdateUI);
};

export default registerUpdateEventListener;
export { updateToDoTest };