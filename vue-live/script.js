var app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: ["Bananas", "Apples", "Avocados"]
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }
});