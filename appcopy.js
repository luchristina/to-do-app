function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value ='';

    // create delete button
    let deleteButton = document.createElement('input');

    // create onclick for delete
    let onClick = document.createAttribute("onclick");
    onClick.value = "deleteButton(this)";

    // create type for deleteButton
    let type = document.createAttribute("type");
    type.value = "button";

    // create text value
    let inputValue = document.createAttribute("value");
    inputValue.value = "Delete";

    // delete set attributes
    deleteButton.setAttributeNode(onClick);
    deleteButton.setAttributeNode(type);
    deleteButton.setAttributeNode(inputValue);
    newLi.appendChild(deleteButton);

});
}

window.onload = function() {
  onReady();
};

// delete button
function deleteButton(btn) {
  var row = btn.parentNode;
  row.parentNode.removeChild(row);
}
