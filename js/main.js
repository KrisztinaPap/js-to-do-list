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

function completeToDo(id) {
    completedList.push(toDoList[id]);
    completedList.endDate = new Date("2015-03-25t12:00:00Z");
    let noLongerActive = document.querySelector(`#li-${id}`);
    noLongerActive.remove();
    toDoList.splice(id, 1); // Removes array element at index position
    console.log("Todo:", toDoList);
    console.log("Completed List:", completedList);

}
/* 
function updateLists() {
    for ( let i = 0; i < toDoList.length; i++ )
    {
        document.getElementById("active-list").innerHTML +=
        `<li><input type="checkbox" id="done-${toDoList.id}" name="done-${toDoList.id}" value="done-${toDoList.id}" onclick="completeToDo(${toDoList.id})"><label for="done-${toDoList.id}">${toDoList.task}<strong> Start: </strong>${toDoList.date}</label><button id="complete-${toDoList.id}" class="button">Delete</button></li>`;
    }
    for ( let j = 0; j < completedList.length; j++ )
    {
        document.getElementById("active-list").innerHTML +=
        `<li><label for="done-${completedList.id}">${completedList.task}<strong> Start: </strong>${completedList.startDate}<strong> End: </strong>${completedList.endDate}</label><button id="complete-${completedList.id}" class="button">Delete</button></li>`;
    }
} */






