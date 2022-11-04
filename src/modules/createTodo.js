import saveTodo from './saveTodo';
import getTodos from './todos';

const validated = ({ description }, todos) => {
  description = description.value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: todos.length + 1 };
  }
  return null;
};

const addTodo = (createTodoForm) => {
  const todos = getTodos();
  const todo = validated(createTodoForm, todos);
  todos.push(todo);
  if (todo === null) return;
  saveTodo(todos);
  createTodoForm.description.value = '';
};

export default addTodo;