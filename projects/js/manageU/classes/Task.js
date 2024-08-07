class Task {
  constructor(description, id = null, completed = false) {
    this.description = description;
    this.id = id || Math.floor(Math.random() * 1000);
    this.completed = completed;
  }
}


export default Task;
// function func() {
//     num = false
// }

// let num = true
// export { Task, num, func };
