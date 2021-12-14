let todos = [
    {task: "Buy eggs", completed: false},
    {task: "Feed the dog", completed: true},
    {task: "Study for the exams", completed: false},
    {task: "Cook dinner", completed: true},
];

function makePendings (todos) {
    todos.forEach((todo, index) => {
        todo.completed = false
    });
}

console.log(todos);
console.log();
makePendings(todos);
console.log(todos);

