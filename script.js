const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
let count = 0;
// For adding task
addButton.addEventListener('click', () => {
	if (todoInput.value) {
		const todoItem = document.createElement('li');
		const checkbox = document.createElement('input');
		const todoText = document.createElement('span');
		const deleteButton = document.createElement('button');

		checkbox.type = 'checkbox';
		checkbox.classList.add('checkbox');

		todoText.innerText = todoInput.value;

		deleteButton.innerText = 'Delete';
		deleteButton.classList.add('delete-button');

		todoItem.appendChild(checkbox);
		todoItem.appendChild(todoText);
	
		todoItem.appendChild(deleteButton);

		todoList.appendChild(todoItem);
		// updating number of tasks
		count ++;
		document.getElementById('tasks-left-count').innerText = count;
		// Resetting the input field
		todoInput.value = '';

	}
});

todoList.addEventListener('click', (event) => {
	const clickedItem = event.target;
	// For deleting task
	if (clickedItem.classList.contains('delete-button')) {
		count--;
		document.getElementById('tasks-left-count').innerText = count;
		clickedItem.parentElement.remove();
	} else if (clickedItem.classList.contains('checkbox')) {
		clickedItem.parentElement.classList.toggle('checked');
	}
});
