import Task from "./Task.js";

class TaskManager {
	constructor() {
		this.tasks = this.loadTasks() || [];
	}

	addTask(description) {
		this.tasks.push(new Task(description));
		this.saveTasks();
	}

	deleteTask(id) {
		this.tasks = this.tasks.filter((task) => task.id != id);
		this.saveTasks();
	}

	updateTaskDescription(id, newDesc) {
		let task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.description = newDesc;
			this.saveTasks();
		}
	}

	completeTask(id) {
		let task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.completed = true;
			this.saveTasks();
		}
	}

	saveTasks() {
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
	}

	loadTasks() {
		let storedTasks = localStorage.getItem("tasks");
		if (storedTasks) {
			let tasks = JSON.parse(storedTasks);
			return tasks.map((task) => new Task(task.description, task.id, task.completed));
		} else {
			return [];
		}
	}

	clearTasks() {
		this.tasks = [];
		this.saveTasks();
	}
}

export default TaskManager;
