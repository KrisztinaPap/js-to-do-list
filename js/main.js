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

//function deletePendingToDo(index) {
//    console.log(`just deleted #li-${index}`);
//    let noLongerActive = document.getElementById(`#li-${index}`);
//    noLongerActive.remove();
//    pendingList.splice(id, 1); // Removes array element at index position
//}

function activateToDo(index) {
    activeList.push(pendingList[index]);
    
    console.log("Pending:", pendingList);
    console.log("Active", activeList);
}

/* function listNewToDo() {
    newToDo.id = toDoList.indexOf(newToDo);
    document.getElementById("active-list").innerHTML += `<li id="li-${newToDo.id}"><input type="checkbox" id="done-${newToDo.id}" name="done-${newToDo.id}" value="done-${newToDo.id}" onclick="completeToDo(${newToDo.id})"><label for="done-${newToDo.id}">${toDoList[newToDo.id].task}<strong> Start: </strong>${toDoList[newToDo.id].startDate}</label><button id="complete-${newToDo.id}" class="button">Delete</button></li>`;
    newToDo = "";
}  */

// startDate: new Date("2015-03-25t12:00:00Z"), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting

/* function listNewCompletedToDo(completedId) {
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
 */

