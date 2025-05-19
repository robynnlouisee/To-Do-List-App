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

    const newWeekBtn = document.querySelector(".new-week-button");

    newWeekBtn.addEventListener("click", () => {
        const weeks = document.querySelectorAll("h2");
        
        const lastWeek = weeks[weeks.length - 1];
        const lastWeekNum = parseInt(lastWeek.textContent.match(/\d+/)) || 0;
        const newWeekNum = lastWeekNum + 1;

        const planners = document.querySelectorAll(".planner");
        const lastPlanner = planners[planners.length - 1];
        const newPlanner = lastPlanner.cloneNode(true);

        newPlanner.querySelectorAll("input").forEach(input => input.value = "");
        newPlanner.querySelectorAll(".task-list").forEach(ul => ul.innerHTML = "");

        const newWeekHeading = document.createElement("h2");
        newWeekHeading.textContent = `WEEK ${newWeekNum}`;
        newWeekHeading.style.fontFamily = 'monospace';

        newWeekBtn.before(newWeekHeading);
        newWeekBtn.before(newPlanner);

        attachAddTaskListeners(newPlanner);
    });
 
    function attachAddTaskListeners(planner) {
        const dayContainers = planner.querySelectorAll(".day");
      
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
      }

      attachAddTaskListeners(document.querySelector(".planner"));
