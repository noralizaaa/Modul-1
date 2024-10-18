// Select elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addButton = document.getElementById('add-btn');

// Add new task
addButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Add task function
function addTask(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
}

// Edit task by double-clicking
taskList.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'SPAN') {
        const currentText = e.target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        e.target.replaceWith(input);

        input.addEventListener('blur', () => {
            const newText = input.value;
            const span = document.createElement('span');
            span.textContent = newText;
            input.replaceWith(span);
        });
    }
});
