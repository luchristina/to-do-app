function onReady() {
  const toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    newToDoText.value = '';

    renderTheUI();

    id++;
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');
      let inputValue = document.createAttribute("value");
      inputValue.value = "Delete";

      checkbox.type = "checkbox";
      deleteButton.type = "button";
      deleteButton.setAttributeNode(inputValue);

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
        event.preventDefault();
        newLi.parentNode.removeChild(newLi);
        const removed = toDos.filter(id => toDos.id);
          remove(toDos.id);
      });
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    renderTheUI();
  });

  renderTheUI();
}



window.onload = function() {
  onReady();
};
