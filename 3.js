const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = '';
    }
});

function addTodo(todoText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(todoItem);

    // Add event listener to delete button
    const deleteButton = todoItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });
}
