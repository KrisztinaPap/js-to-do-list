// Declare variables
let toDoList = []; // Initializes an empty array

function addNewToDo () {
    let newToDo = {
        task: document.getElementById("newtask").value.trim().toLowerCase(), // Takes input and trims off leading/trailing white spaces and converts to all lowercase
        date: new Date()
    };
    toDoList.push(newToDo);
    console.log(toDoList);
}



