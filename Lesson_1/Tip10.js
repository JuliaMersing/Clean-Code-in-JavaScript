function printAllToDoes(todos) {
  for (let todo of todos) {
    console.log(todo.task);
  }
}

function printCompletedToDoes(todos) {
  for (let todo of todos) {
    if (todo.done) {
      console.log(todo.task);
    }
  }
}

function printPendingToDoes(todos) {
  for (let todo of todos) {
    if (!todo.done) {
      console.log(todo.task);
    }
  }
}
