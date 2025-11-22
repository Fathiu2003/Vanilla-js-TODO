document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the key elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const taskList = document.getElementById('task-list');

    // 2. Function to create and add a new task item
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create the main list item (li)
        const listItem = document.createElement('li');
        
        // Create a span for the text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create the Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // Add the event listener to the Delete button
        deleteButton.addEventListener('click', () => {
            listItem.remove(); // Removes the whole list item (the parent)
        });

        // Assemble the list item: <li><span>Task Text</span><button>Delete</button></li>
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        
        // Add the new list item to the main list (ul)
        taskList.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = '';
    }

    // 3. Attach the addTask function to the button click
    addButton.addEventListener('click', addTask);
    
    // Optional: Allow pressing 'Enter' key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
