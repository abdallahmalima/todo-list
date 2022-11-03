const saveTodo = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default saveTodo;