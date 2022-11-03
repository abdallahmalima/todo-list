const getTodos = () => (localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

export default getTodos;
