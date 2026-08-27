/*const toDoList = {
  urgent: [],
  todo: [],
  completed: [],

  add(item) {
    this.todo.push(item);
  },

  checked(item) {
    const index = this.todo.indexOf(item);
    if (index !== -1) {
      this.todo.splice(index, 1);
      this.completed.push(item);
    }
  },

  removeToDo(item) {
    const index = this.todo.indexOf(item);
    if (index !== -1) {
      const removedItem = this.todo.splice(index, 1)[0];
      return removedItem;
    }
  },

  prioritize(item) {
    const index = this.todo.indexOf(item);
    if (index !== -1) {
      this.todo.splice(index, 1);
      this.urgent.push(item);
    }
  },

  clearAll() {
    this.urgent = [];
    this.todo = [];
    this.completed = [];
  }
};



toDoList.add("call attorney");
toDoList.add("pay bills");
toDoList.add("mow the lawn");
toDoList.checked("call attorney");        // todo -> completed
toDoList.prioritize("pay bills");     // todo -> urgent
const gone = toDoList.removeToDo("mow the lawn");
console.log(gone);                   // "mow lawn"
console.log(toDoList);               // urgent: ["pay bills"], todo: [], completed: ["call attroney"]
toDoList.clearAll();
console.log(toDoList);               // all three empty */

const toDoList = {
  urgent: [],
  todo: [],
  completed: [],

  moveFromTodo(item, target) {
    const index = this.todo.indexOf(item);
    if (index !== -1) {
      const removed = this.todo.splice(index, 1)[0];
      if (target) target.push(removed);
      return removed;
    }
  },

  add(item) {
    this.todo.push(item);
  },

  checked(item) {
    this.moveFromTodo(item, this.completed);
  },

  removeToDo(item) {
    const removedItem = this.moveFromTodo(item);
    return removedItem;
  },

  prioritize(item) {
    this.moveFromTodo(item, this.urgent);
  },

  clearAll() {
    this.urgent = [];
    this.todo = [];
    this.completed = [];
  },
};

// --- prioritize ---
toDoList.add("pay bills");
toDoList.add("mow the lawn");

toDoList.prioritize("pay bills");
console.log(toDoList.urgent);        // [ 'pay bills' ]      moved in
console.log(toDoList.todo);          // [ 'mow the lawn' ]   moved out, other item untouched

toDoList.prioritize("not on the list");
console.log(toDoList.urgent);        // [ 'pay bills' ]      unchanged, no undefined pushed
console.log(toDoList.todo);          // [ 'mow the lawn' ]   unchanged

toDoList.prioritize("pay bills");
console.log(toDoList.urgent);        // [ 'pay bills' ]      still one copy, not two
