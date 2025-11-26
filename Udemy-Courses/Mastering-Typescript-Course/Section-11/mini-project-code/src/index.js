var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form"); // TYPE ASSERTION: Non Null Assertion
var list = document.getElementById("todolist");
var todos = readTodos() || [];
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return;
    return JSON.parse(todosJSON);
}
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos(todos);
    input.value = "";
}
function createTodo(todo) {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos(todos);
    });
    li.append(checkbox);
    li.append(todo.text);
    list.append(li);
}
form.addEventListener("submit", handleSubmit);
//* In order to have the todo List to have a centralized state, and be something more than just li's hanging in space, we will want to save them to local storage...We will first have the todos use an array as its data structure for how it will look in local storage...we will need an interface to define how each todo will look...then we will create a function to create the todo item in the DOM based on the interface...finally we will modify the handleSubmit function to create a new todo object, push it to the todos array, and then call the createTodo function to add it to the DOM.
//^ When using local storage, we will need to convert the todos array to a string using JSON.stringify when saving, and parse it back to an array using JSON.parse when retrieving. Since local storage only supports string key-value pairs.
//! Old code, before creating interface
// function handleSubmit(e: SubmitEvent) {
//     e.preventDefault();
//     const todoText = input.value;
//     const li = document.createElement("li");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     li.append(checkbox);
//     li.append(todoText);
//     list.append(li);
//     input.value = "";
// }
