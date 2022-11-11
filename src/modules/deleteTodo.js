import renderTodos from './renderTodos';
import saveTodo from './saveTodo';
import getTodos from './todos';

const deleteTodoTest = (id) => {
  const index = id;
  const todos = getTodos().filter((todo) => todo.index !== Number(index))
    .map((todo, i) => {
      todo.index = i + 1;
      return todo;
    });

  saveTodo(todos);
  renderTodos();
};

const deleteTD = ({ target }) => {
  const index = target.closest('svg').id;
  deleteTodoTest(index);
};

const addEventListenerForDelete = (trashIcon) => {
  trashIcon.addEventListener('click', deleteTD);
};
const registerDeleteEventListener = () => {
  const trashIcons = document.querySelectorAll('.trash-icon');
  trashIcons.forEach(addEventListenerForDelete);
};

export default registerDeleteEventListener;
export { deleteTodoTest };