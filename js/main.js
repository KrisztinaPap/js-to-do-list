// Declare variables
let newToDo = "";
let toDoList = []; // Initializes an empty array
let completedList = []; // Initializes an empty array

function addNewToDo() {
    newToDo = {
        task: document.getElementById("newtask").value.trim().toLowerCase(), // Takes input and trims off leading/trailing white spaces and converts to all lowercase
        date: new Date("2015-03-25t12:00:00Z"), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    };
    if (!toDoList.includes(newToDo)) {
        toDoList.push(newToDo);
        listNewToDo();
        console.log(toDoList);
    }
}

function listNewToDo() {
    newToDo.id = toDoList.indexOf(newToDo);
    document.getElementById("active-list").innerHTML += `<li><input type="checkbox" id="done-${newToDo.id}" name="done-${newToDo.id}" value="done-${newToDo.id}"><label for="done-${newToDo.id}">${toDoList[newToDo.id].task}<strong> Start: </strong>${toDoList[newToDo.id].date}</label><button id="complete-${newToDo.id}" class="button">Delete</button></li>`;
    newToDo = "";
} 

function completeToDo(index) {
    completedList.push(toDoList[index]);
    toDoList.splice(index, 1); // Removes array element at index position
    console.log(completedList);
}






