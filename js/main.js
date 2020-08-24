// Declare variables
let newToDo = {};
let pendingList = []; // Initializes an empty array
let activeList = []; // Initializes an empty array
let completedList = []; // Initializes an empty array
let userInput = document.getElementById("newtask").value;
let htmlPendingList = document.getElementById("pending-list").innerHTML;
let htmlActiveList = document.getElementById("active-list").innerHTML;
let htmlCompletedList = document.getElementById("completed-list").innerHTML;


function addNewToDo() {
    newToDo = {
        id: Math.random(),
        task: userInput.trim(), // Takes input and trims off leading/trailing white spaces
        addedDate: new Date("2015-03-25t12:00:00Z"), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
        startDate: "",
        endDate: ""
    };
    pendingList.push(newToDo);
    console.log("Pending:", pendingList);
    displayPendingToDo(newToDo.id);
}

function displayPendingToDo(id) {
    let index = pendingList.indexOf(newToDo);
    let listItem = 
        `<li id="li-${id}">
            ${pendingList[index].task}
            <button id="start-${id} onclick="activateToDo(${id}, e), e.preventDefault()">Start</button>
            <button id="delete-${id}">Delete</button>
        </li>`;
    let position = "beforeend";
    htmlPendingList.insertAdjacentHTML( position, listItem);
}

function activateToDo(index) {
    pendingList[index].startDate = new Date("2015-03-25t12:00:00Z"); // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push(pendingList[index]);
    console.log("Pending:", pendingList);
    console.log("Active", activeList);
}
