import renderTodos from './renderTodos';
import saveTodo from './saveTodo';
import getTodos from './todos';

const clearCompleted = () => {
  let todos = getTodos();
  todos = todos.filter((todo) => (
    !todo.completed
  ));
  todos = todos.map((todo, i) => {
    todo.index = i + 1;
    return todo;
  });
  saveTodo(todos);
  renderTodos();
};

export default clearCompleted;