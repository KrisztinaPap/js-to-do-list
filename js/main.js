// Declare variables
let newToDo = {};
const newToDoForm = document.getElementById( "add-to-do-form" );
let pendingList = []; // Initializes an empty array
let activeList = []; // Initializes an empty array
let completedList = []; // Initializes an empty array
let userInput = document.getElementById( "new-task" ).textContent;
let htmlPendingList = document.getElementById( "pending-list" );
let htmlActiveList = document.getElementById( "active-list" );
let htmlCompletedList = document.getElementById( "completed-list" );

newToDoForm.addEventListener( 'submit', ( event, userInput ) => {
    event.preventDefault();
    createNewToDo( userInput );
});

htmlPendingList.addEventListener( 'click', ( event ) => {
    event.preventDefault();
    let clickedId = event.target.id;
    console.log("clickedId:", clickedId);
    console.log("pending:", pendingList);
    let clickedItem = pendingList.find( item => {
        return item.id === Number(clickedId)
    });
    console.log("clickedItem:", clickedItem);
    //pendingList[clickedId].startDate = new Date( "2015-03-25t12:00:00Z" ); // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push( pendingList[clickedId] );
    
    console.log("active:", activeList); 
});

function createNewToDo( userInput ) {
    newToDo = {
        id: Math.floor((Math.random() * 1000000) + 1),
        task: userInput.value, // Takes input and trims off leading/trailing white spaces
        addedDate: new Date( "2015-03-25t12:00:00Z" ), // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
        startDate: "",
        endDate: ""
    };
    addPendingToDo( newToDo );
    showToDo( newToDo );
}

function addPendingToDo( newToDo ) {
    pendingList.push( newToDo );
}

function showToDo( newToDo ) {
    // show todo in HTML
    const newLI = document.createElement( 'LI' );
//    const newCheckBox = document.createElement( 'INPUT' );
    const newButton = document.createElement( 'BUTTON' );
    
//    newCheckBox.type = "checkbox";
    newButton.type = "button";
    newButton.id = newToDo.id;
    newButton.innerHTML = "Start";
    newButton.classList.add( "activateButton" );
    
    newLI.textContent = `${newToDo.task}`;
    newLI.id = `${newToDo.id}`;
//    newLI.prepend( newCheckBox );
    newLI.append( newButton );

    htmlPendingList.appendChild( newLI );
}




/* function deleteButtonClick(id) {
    deleteButton.addEventListener( ' click ', ( id ) => {
        console.log( `A Delete button was pressed! ${id}` );
    });
} */

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
