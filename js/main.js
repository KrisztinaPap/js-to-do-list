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

function deleteListItem() {
        event.preventDefault();
        let toDeleteId = event.target.id;
        let toDeleteIndex = activeList.findIndex( item => item.id === toDeleteId ) || completedList.findIndex( item => item.id === toDeleteId );
        let toDelete = document.getElementById( `${toDeleteId}` );
        toDelete.remove();  // Removed clicked item from pending HTML
        if(activeList.includes(toDelete)){
            activeList.splice(toDeleteIndex, 1); // Removes array element at index position
        }
        if(completedList.includes(toDelete)){
            completedList.splice(toDeleteIndex, 1); // Removes array element at index position
        }
         
};

htmlPendingList.addEventListener( 'click', ( event ) => {
    event.preventDefault();
    let clickedId = event.target.id;
    //  Citation
    //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //      The below code block finds the item on pendinglist that has the same id as our clicked button.
    let clickedItem = pendingList.find( item => {
        return item.id === Number(clickedId)
    });
    // Citation
    //      https://tecadmin.net/get-current-date-time-javascript/
    // The below 4 lines of code get the current date and time, format them, then concatenate them into a variable called dateTime 
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    let clickedItemIndex = pendingList.indexOf( clickedItem );
    clickedItem.startDate = dateTime; // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push( clickedItem );
    let noLongerActive = document.querySelector( `.pending-task-${clickedId}` );
    noLongerActive.remove();  // Removed clicked item from pending HTML
    pendingList.splice(clickedItemIndex, 1); // Removes array element at index position
 
    showActiveToDo ( clickedItem );
});

htmlActiveList.addEventListener( 'change', ( event ) => {
    event.preventDefault();
    console.log(event.Path);
    let checkedItem = Number(event.Path[1].id);
    let checkedItemIndex = activeList.findIndex( item => item.id === checkedItem );
    completedList.push( activeList[checkedItemIndex] );
    let noLongerActive = document.querySelector( `.active-task-${checkedItem}` );
    noLongerActive.remove();  // Removed clicked item from pending HTML
    activeList.splice(checkedItemIndex, 1); // Removes array element at index position
    showCompletedToDo ( checkedItem, checkedItemIndex ); 
});

htmlCompletedList.addEventListener( 'change', ( event ) => {
    event.preventDefault();
    let reverseCheckedItem = Number(event.composedPath[1].id);
    let reverseCheckedItemIndex = completedList.findIndex( item => item.id === reverseCheckedItem );

    // Citation
    //      https://tecadmin.net/get-current-date-time-javascript/
    // The below 4 lines of code get the current date and time, format them, then concatenate them into a variable called dateTime 
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    reverseCheckedItem.startDate = dateTime; // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    activeList.push( completedList[reverseCheckedItemIndex] );
    let noLongerActive = document.querySelector( `.completed-task-${reverseCheckedItem}` );
    noLongerActive.remove();  // Removed clicked item from pending HTML
    completedList.splice(reverseCheckedItemIndex, 1); // Removes array element at index position
    let newIndex = activeList.findIndex( item => item.id === reverseCheckedItem);
    clickedItem = activeList[newIndex];
    showActiveToDo ( clickedItem ); 
});

function createNewToDo( userInput ) {
    // Citation
    //      https://tecadmin.net/get-current-date-time-javascript/
    // The below 4 lines of code get the current date and time, format them, then concatenate them into a variable called dateTime 
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    newToDo = {
        id: Math.floor((Math.random() * 1000000) + 1),
        task: userInput.value, // Takes input and trims off leading/trailing white spaces
        addedDate: dateTime, // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
        startDate: "",
        endDate: ""
    };
    addPendingToDo( newToDo );
    showPendingToDo( newToDo );
}

function addPendingToDo( newToDo ) {
    pendingList.push( newToDo );
}

function showPendingToDo( newToDo ) {
    // show todo in HTML
    const newLI = document.createElement( 'LI' );
    const newP1 = document.createElement( 'SPAN' );
    const newP2 = document.createElement( 'P' );
    const newButton = document.createElement( 'BUTTON' );
    
    newP1.classList.add("task-name");
    newP1.textContent = `${newToDo.task}`;
    newP1.contentEditable = true;

    newP2.classList.add("task-date", "first-pending");
    newP2.textContent = `Added: ${newToDo.addedDate}`;

    newButton.type = "button";
    newButton.classList.add("button", "yellow", "first-pending");
    newButton.id = newToDo.id;
    newButton.innerHTML = "Start";
    newButton.classList.add( "activateButton" );
    
    newLI.classList.add( `pending-task-${newToDo.id}` );
    newLI.id = `${newToDo.id}`;
    newLI.appendChild( newP1 );
    newLI.appendChild( newP2 );
    newLI.append( newButton );

    htmlPendingList.appendChild( newLI );
}

function showActiveToDo( clickedItem ) {
    const newLI = document.createElement( 'LI' );
    const newP1 = document.createElement( 'SPAN' );
    const newP2 = document.createElement( 'P' );
    const newCheckBox = document.createElement( 'INPUT' );
    const newButton = document.createElement( 'BUTTON' );
    
    newP1.classList.add("task-name");
    newP1.textContent = `${clickedItem.task}`;
    newP1.contentEditable = true;

    newP2.classList.add("task-date");
    newP2.textContent = `Started: ${clickedItem.startDate}`;

    newCheckBox.type = "checkbox";
    newButton.type = "button";
    newButton.classList.add("button", "red");
    newButton.id = clickedItem.id;
    newButton.innerHTML = "Delete";
    newButton.classList.add( "deleteButton" );
    newButton.addEventListener( 'click', () => {deleteListItem(newButton.id)});
    
    newLI.classList.add( `active-task-${clickedItem.id}` );
    newLI.id = `${clickedItem.id}`;
    newLI.appendChild( newP1 );
    newLI.appendChild( newP2 );
    newLI.prepend( newCheckBox );
    newLI.append( newButton );

    htmlActiveList.appendChild( newLI );
}

function showCompletedToDo( checkedItem ) {
    let completedItemIndex = completedList.findIndex( item => item.id === checkedItem );
    let completedItem = completedList[completedItemIndex];

    // Citation
    //      https://tecadmin.net/get-current-date-time-javascript/
    // The below 4 lines of code get the current date and time, format them, then concatenate them into a variable called dateTime 
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    completedItem.endDate = dateTime; // Citation: https://www.w3schools.com/js/js_date_formats.asp; date formatting
    const newLI = document.createElement( 'LI' );
    const newP1 = document.createElement( 'SPAN' );
    const newP2 = document.createElement( 'P' );
    const newButton = document.createElement( 'BUTTON' );
    const reverseCheckBox = document.createElement( 'INPUT');
    
    newP1.classList.add("task-name");
    newP1.id = Math.floor((Math.random() * 1000000) + 1);
    newP1.textContent = `${completedItem.task}`;
    newP1.contentEditable = true;

    newP2.classList.add("task-date");
    newP2.textContent = `Completed: ${completedItem.endDate}`;

    newButton.type = "button";
    newButton.classList.add("button", "red");
    newButton.id = completedItem.id;
    newButton.innerHTML = "Delete";
    newButton.classList.add( "deleteButton" );
    newButton.addEventListener( 'click', () => {deleteListItem(newButton.id)});

    reverseCheckBox.type = "checkbox";
    reverseCheckBox.checked = true;
    reverseCheckBox.classList.add("checkbox");
    
    newLI.classList.add( `completed-task-${completedItem.id}` );
    newLI.id = `${completedItem.id}`;
    newLI.appendChild( newP1 );
    newLI.appendChild( newP2 );
    newLI.append( newButton );
    newLI.prepend( reverseCheckBox );

    htmlCompletedList.appendChild( newLI );
}

