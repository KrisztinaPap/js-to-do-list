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
    //  Citation
    //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //      The below code block finds the item on pendinglist that has the same id as our clicked button.
    let clickedItem = pendingList.find( item => {
        return item.id === Number(clickedId)
    });
    let clickedItemIndex = pendingList.indexOf( clickedItem );
    clickedItem.startDate = new Date( "2015-03-25t12:00:00Z" ); // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push( clickedItem );

    let noLongerActive = document.querySelector( `.pending-task-${clickedId}` );
    console.log(noLongerActive);
    noLongerActive.remove();  // Removed clicked item from pending HTML
    pendingList.splice(clickedItemIndex, 1); // Removes array element at index position
    console.log("pending:", pendingList); 
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
    newLI.classList.add( `pending-task-${newToDo.id}` );
    newLI.id = `${newToDo.id}`;
//    newLI.prepend( newCheckBox );
    newLI.append( newButton );

    htmlPendingList.appendChild( newLI );
}
