import renderTodos from './renderTodos';
import getTodos from './todos';
import saveTodo from './saveTodo';

const updateTodo = () => {
  const treeDotIcons = document.querySelectorAll('.three-dot-icon');
  treeDotIcons.forEach((treeDotIcon) => {
    treeDotIcon.addEventListener('click', ({ target }) => {
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

      const updateTodoForm = document.querySelector('.todo-item-form');
      updateTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const validated = ({ description }, books) => {
          description = description.value.trim();
          if (description.length > 0) {
            return { description, completed: false, index: books.length + 1 };
          }
          return null;
        };

        const update = (updateTodoForm) => {
          const todos = getTodos();
          let updatedTodo = validated(updateTodoForm, todos);
          if (updatedTodo === null) return;
          const index = treeDotIcon.id;
          updatedTodo = {
            description: updatedTodo.description,
            completed: todos[index-1].completed,
            index: Number(index),
          };

          const updatedTodos = todos.map((todo) => {
            if (todo.index === Number(index)) todo = updatedTodo;
            return todo;
          });
          saveTodo(updatedTodos);
          renderTodos();
        };

        update(updateTodoForm);
      });
    });
  });
};

export default updateTodo;