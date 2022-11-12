import renderTodos from './renderTodos';
import saveTodo from './saveTodo';
import getTodos from './todos';

const markCompletedTest = (id) => {
  const index = Number(id);
  const todos = getTodos();

  if (todos[index - 1].completed) {
    todos[index - 1].completed = false;
  } else {
    todos[index - 1].completed = true;
  }

  saveTodo(todos);
  renderTodos();
};

const markCompleted = ({ target }) => {
  markCompletedTest(target.id);
};

const addEventListenerForMarkCompleted = (checkbox) => {
  checkbox.addEventListener('click', markCompleted);
};
const registerMarkCompletedEventListener = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(addEventListenerForMarkCompleted);
};

export default registerMarkCompletedEventListener;
export { markCompletedTest };