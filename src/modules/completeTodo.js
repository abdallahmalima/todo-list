import renderTodos from './renderTodos';
import saveTodo from './saveTodo';
import getTodos from './todos';

const markCompletedTodo = () => {
    const ckeckboxes = document.querySelectorAll('.checkbox');
    ckeckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
        const index = Number(checkbox.id);
        let todos = getTodos();
        
        if(todos[index-1].completed){
            todos[index-1].completed=false;
        }else{
            todos[index-1].completed=true;
        }
        
  
        saveTodo(todos);
        renderTodos();
      });
    });
  };
  
  export default markCompletedTodo;