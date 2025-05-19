const dayContainers = document.querySelectorAll(".day");

dayContainers.forEach(day => {
const addBtn = day.querySelector(".add-button");
const timeInput = day.querySelector(".time-input");
const taskInput = day.querySelector(".text-input");
const taskList = day.querySelector(".task-list");

addBtn.addEventListener("click", () => {
    const time = timeInput.value;
    const task = taskInput.value;

    if (time && task) {
    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = `${time} - ${task}`;
    taskText.classList.add('task-text');

    const deleteBtn = document.createElement('button');
deleteBtn.textContent = '✖';
deleteBtn.classList.add('delete-btn');

deleteBtn.addEventListener('click', () => {
    li.remove();
});

li.appendChild(taskText);
li.appendChild(deleteBtn);
taskList.appendChild(li);

    timeInput.value = '';
    taskInput.value = '';
    }
});
});