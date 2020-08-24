// Declare variables
let newToDo = {};
let pendingList = []; // Initializes an empty array
let activeList = []; // Initializes an empty array
let completedList = []; // Initializes an empty array
let userInput = document.getElementById( "new-task" );
let htmlPendingList = document.getElementById( 'pending-list' ).innerHTML;
let htmlActiveList = document.getElementById( 'active-list' ).innerHTML;
let htmlCompletedList = document.getElementById( 'completed-list' ).innerHTML;
let deleteButton = document.querySelectorAll( '.deleteButton ').innerHTML;

/* function deleteButtonClick(id) {
    deleteButton.addEventListener( ' click ', ( id ) => {
        console.log( `A Delete button was pressed! ${id}` );
    });
} */

function createNewToDo( userInput ) {
    newToDo = {
        id: Math.random(),
        task: userInput.value, // Takes input and trims off leading/trailing white spaces
        addedDate: new Date( "2015-03-25t12:00:00Z" ), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
        startDate: "",
        endDate: ""
    };
    addPendingToDo( newToDo );
    reloadPendingList();
}

function addPendingToDo( newToDo ) {
    pendingList.push( newToDo );
    console.log( "Pending:", pendingList );
}

/* function activateToDo(index) {
    pendingList[index].startDate = new Date("2015-03-25t12:00:00Z"); // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push(pendingList[index]);
    console.log("Pending:", pendingList);
    console.log("Active", activeList);
} */

function reloadPendingList() {
    htmlPendingList = "";
    for ( let i = 0; i < pendingList.length; i++ ) {
        htmlPendingList += pendingList[i].task;
    }
}
