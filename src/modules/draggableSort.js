
const registerGraggableEventListeners=()=>{
 const list=document.querySelectorAll('li');
 list.forEach((listItem)=>{
     listItem.addEventListener('dragstart',(e)=>{
     listItem.classList.add('dragging')
    });
    listItem.addEventListener('dragend',(e)=>{
    listItem.classList.remove('dragging');
    });
    let cursorPos=0;
    listItem.addEventListener('dragover',(e)=>{
        e.preventDefault()
       const dragging=document.querySelector('.dragging');
       const currentDraggedOveritem=e.target.closest('li');
       const middlePos=currentDraggedOveritem.getBoundingClientRect().top+(currentDraggedOveritem.getBoundingClientRect().height/2);
      
       currentDraggedOveritem.before(dragging);
       cursorPos<e.clientY ?currentDraggedOveritem.before(dragging)
                           :currentDraggedOveritem.after(dragging);
       cursorPos=e.clientY;
       
    });
 });
}
export default registerGraggableEventListeners;