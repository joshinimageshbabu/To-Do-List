function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
    deleteIcon.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    li.appendChild(deleteIcon);

    taskList.appendChild(li);
    taskInput.value = "";
}
