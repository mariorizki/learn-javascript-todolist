const todoList = {
  todos: [
    {
      text: "Learning JavaScript",
      completed: false,
      datedAt: new Date("2019-01-01")
      updatedAt: new Date("2019-01-01")
    }
  ],

  displayTodos: function() {
    console.log('My todos: ', this.todos)
  },

  addTodo: function(todo) {
    this.todos.push(todo)
    this.displayTodos()
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos()
  }
}
