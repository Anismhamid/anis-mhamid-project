import TaskManager from "./classes/TaskManager.js";
let manager = new TaskManager();

window.showTodosFromApi = function showTodosFromApi() {
	axios
		.get("https://jsonplaceholder.typicode.com/todos")
		.then((response) => {
			const tasks = response.data;

			// Separate tasks into active and completed
			const activeTasks = tasks.filter((task) => !task.completed);
			const completedTasks = tasks.filter((task) => task.completed);

			let htmlString = "";
			let htmlString2 = "";

			// Render active tasks
			activeTasks.forEach((task) => {
				htmlString += `
          <div>
            <div class="border bg-light border-1 my-1 d-flex align-items-center w-100 m-auto">
              <li class='list-group-item d-inline-block w-50'>${task.title} , ${task.id}</li>
              <button class='btn btn-success me-1' onclick='completeTask(${task.id})'>
                <i class="fa-solid fa-check"></i>
              </button>
              <button class='btn btn-primary me-1' onclick="updateTaskDescription(${task.id})">
                <i class="text-light fa-sharp fa-solid fa-pencil"></i>
              </button>
              <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `;
			});

			// Render completed tasks
			completedTasks.forEach((task) => {
				htmlString2 += `
          <div>
            <div class="border border-1 my-1 d-flex align-items-center w-75 m-auto">
              <li class='list-group-item d-inline-block w-50'>${task.title} , ${task.id}</li>
              <button class='btn btn-success me-1' onclick='completeTask(${task.id})'>
                <i class="fa-solid fa-check"></i>
              </button>
              <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `;
			});

			document.getElementById("completedTasks").innerHTML = htmlString;
		})
		.catch((err) => {
			console.log(err);
		});
};

window.addNewTask = function addNewTask() {
	let description = document.getElementById("description").value;
	if (description != "") {
		manager.addTask(description);
		showTasks();
	} else {
		alert("please fill the description input");
	}
	document.getElementById("description").value = "";
};

function showTasks() {
	document.getElementById("activeTasks").innerHTML = "";
	document.getElementById("completedTasks").innerHTML = "";

	for (let task of manager.tasks) {
		if (task.completed) {
			document.getElementById(
				"completedTasks",
			).innerHTML += `<div class="d-flex align-items-start justify-content-between">
            <div class="border bg-light border-1 my-1  w-50 m-auto">
              <li class='list-group-item d-inline-block w-100 custom-wrap'>${task.description} , ${task.id}</li>
              </div>
              <div>
              <button disabled class='btn btn-success me-1' onclick='completeTask(${task.id})'>
                <i class="fa-solid fa-ban"></i>
              </button>
              <button disabled class='btn btn-primary me-1' onclick="updateTaskDescription(${task.id})">
                <i class="fa-solid fa-ban"></i>
              </button>
              <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
    `;
		} else {
			document.getElementById("activeTasks").innerHTML += `
      <div class="d-flex align-items-start justify-content-between">
            <div class="border bg-light border-1 my-1  w-50 m-auto">
        <li class=' custom-wrap list-group-item d-inline-block w-100'> ${task.description} </li>
        </div>
        <div>
        <button class='btn btn-success me-1' onclick='completeTask(${task.id})'>
          <i class="fa-solid fa-check"></i>
        </button>
        <button class='btn btn-primary me-1' onclick="updateTaskDescription(${task.id})">
          <i class="text-light fa-sharp fa-solid fa-pencil"></i>
        </button>
        <button class='btn btn-danger me-1' onclick='deleteTask(${task.id})'>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
`;
		}
	}
}
showTasks();

window.completeTask = function completeTask(id) {
	manager.completeTask(id);
	if (!manager.completeTask) {
		disableResetButton();
	} else {
		showResetButton();
	}
	showTasks();
};

function showResetButton() {
	return (document.getElementById(
		"buttonRow",
	).innerHTML = `<br><button onclick="resetAll()" id="bu" class="btn btn-danger w-25 my-3 m-auto">Reset All</button>`);
}

function disableResetButton() {
	return (document.getElementById("bu").style.display = "none");
}

window.deleteTask = function deleteTask(id) {
	try {
		manager.deleteTask(id);
		showTasks();
	} catch (error) {
		alert("Failed to delete the task");
	}
};

window.updateTaskDescription = function updateTaskDescription(id) {
	let idPlusNewDescription = prompt("Please Eneter the new Description");
	if (idPlusNewDescription) {
		manager.updateTaskDescription(id, idPlusNewDescription);
		showTasks();
	} else if (idPlusNewDescription == "") {
		alert("err Please fill the description");
	}
	showTasks();
};

window.resetAll = function resetAll() {
	disableResetButton();
	document.getElementById("activeTasks").innerHTML = "";
	document.getElementById("completedTasks").innerHTML = "";
	document.getElementById("description").value = "";
	manager.clearTasks();
	showTasks();
};
