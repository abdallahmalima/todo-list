const registerGraggableEventListeners = () => {
  const list = document.querySelectorAll('li');
  list.forEach((listItem) => {
    listItem.addEventListener('dragstart', () => {
      listItem.classList.add('dragging');
    });
    listItem.addEventListener('dragend', () => {
      listItem.classList.remove('dragging');
    });
    let cursorPos = 0;
    listItem.addEventListener('dragover', (e) => {
      e.preventDefault();
      const dragging = document.querySelector('.dragging');
      const currentDraggedOveritem = e.target.closest('li');

      if (cursorPos < e.clientY) {
        currentDraggedOveritem.before(dragging);
      } else {
        currentDraggedOveritem.after(dragging);
      }
      cursorPos = e.clientY;
    });
  });
};
export default registerGraggableEventListeners;