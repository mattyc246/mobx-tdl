import { observable, autorun, computed, decorate } from "mobx";

class ObseravbleToDoStore {
  todos = [{ task: "Burn all chickens", completed: false }];
  pendingRequests = [];
  newTask = "";

  constructor() {
    autorun(() => {
      console.log(this.report);
    });
  }

  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return "<none>";
    return (
      `Next todo: ${this.todos[0].task}` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false
    });
  }

  handleNewTask(value) {
    this.newTask = value;
  }
}

decorate(ObseravbleToDoStore, {
  todos: observable,
  pendingRequests: observable,
  newTask: observable,
  completedTodosCount: computed,
  report: computed
});

const observableToDoStore = new ObseravbleToDoStore();

export default observableToDoStore;
