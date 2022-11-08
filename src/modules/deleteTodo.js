import renderTodos from './renderTodos';
import saveTodo from './saveTodo';
import getTodos from './todos';

const deleteTD = ({ target }) => {
  const index = target.closest('svg').id;
  const todos = getTodos().filter((todo) => todo.index !== Number(index))
    .map((todo, i) => {
      todo.index = i + 1;
      return todo;
    });

  saveTodo(todos);
  renderTodos();
};

const addEventListenerForDelete = (trashIcon) => {
  trashIcon.addEventListener('click', deleteTD);
};
const registerDeleteEventListener = () => {
  const trashIcons = document.querySelectorAll('.trash-icon');
  trashIcons.forEach(addEventListenerForDelete);
};

export default registerDeleteEventListener;