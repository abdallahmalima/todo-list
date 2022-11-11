import saveTodo from './saveTodo';
import getTodos from './todos';
import renderTodos from './renderTodos';

const validated = (createTodoForm, todos) => {
  const  description = createTodoForm.children[0].value.trim();
  if (description.length > 0) {
    return { description, completed: false, index: todos.length + 1 };
  }
  return null;
};

const resetForm = (createTodoForm) => {
  createTodoForm.children[0].value = '';
};

const addTodo = (createTodoForm) => {
  const todos = getTodos();
  const todo = validated(createTodoForm, todos);
  if (todo === null) return;
  todos.push(todo);
  saveTodo(todos);
  resetForm(createTodoForm);
  renderTodos();
};

export default addTodo;