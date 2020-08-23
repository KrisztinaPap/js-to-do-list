// Declare variables
let newToDo = {};
let toDoList = []; // Initializes an empty array
let completedList = []; // Initializes an empty array

function addNewToDo() {
    newToDo = {
        task: document.getElementById("newtask").value.trim().toLowerCase(), // Takes input and trims off leading/trailing white spaces and converts to all lowercase
        startDate: new Date("2015-03-25t12:00:00Z"), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
        endDate: ""
    };
    toDoList.push(newToDo);
    listNewToDo();
    console.log("Todo:", toDoList);
}

function listNewToDo() {
    newToDo.id = toDoList.indexOf(newToDo);
    document.getElementById("active-list").innerHTML += `<li id="li-${newToDo.id}"><input type="checkbox" id="done-${newToDo.id}" name="done-${newToDo.id}" value="done-${newToDo.id}" onclick="completeToDo(${newToDo.id})"><label for="done-${newToDo.id}">${toDoList[newToDo.id].task}<strong> Start: </strong>${toDoList[newToDo.id].startDate}</label><button id="complete-${newToDo.id}" class="button">Delete</button></li>`;
    newToDo = "";
} 
function listNewCompletedToDo(completedId) {
    document.getElementById("completed-list").innerHTML += `<li>${completedList[completedId].task}<label for="done-${completedList[completedId]}"><strong> Start: </strong>${completedList[completedId].startDate}<strong> End: </strong>${completedList[completedId].endDate}<button id="complete-${completedList.completedId}" class="button">Delete</button></li>`;
}

function completeToDo(id) {
    completedList.push(toDoList[id]);
    let completedId = completedList.length-1;
    completedList.endDate = new Date("2015-03-25t12:00:00Z");
    listNewCompletedToDo(completedId);
    let noLongerActive = document.querySelector(`#li-${id}`);
    noLongerActive.remove();
    toDoList.splice(id, 1); // Removes array element at index position
    console.log("Todo:", toDoList);
    console.log("Completed List:", completedList);

}






