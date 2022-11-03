import deleteTodo from './deleteTodo';
import getTodos from './todos';
import updateTodo from './updateTodo';

const renderTodos = () => {
  const todoListContainer = document.querySelector('.todo-list');
  const todosLists = getTodos().sort((a, b) => a.index - b.index).map(({ description, index }) => (
    ` <li>
        <div class="list-item">
          <input class="checkbox" type="checkbox">
          <p>${description}</p>
        </div>
        <svg id="${index}" class="trash-icon" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        <svg id="${index}" class="three-dot-icon" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
       </li>`
  )).join('');
  todoListContainer.innerHTML = `<ul> ${todosLists} </ul>`;
  updateTodo();
  deleteTodo();
};

export default renderTodos;