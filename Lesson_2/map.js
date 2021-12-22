let todos = [
    {task: "Buy eggs", completed: false},
    {task: "Feed the dog", completed: true},
    {task: "Study for the exams", completed: false},
    {task: "Cook dinner", completed: true},
];

function identify (todos) {
  return todos.map((todo, index) => {
        return {
            ...todo,
            id: index + 1
        }
    });
}

console.log("Todos before:" , todos);
let identified = identify(todos);
console.log("Todos after: ", identified);
