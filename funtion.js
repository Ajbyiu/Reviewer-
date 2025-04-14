// Funciton add task on Weekly days
//Check Symbol &#x2714;
//Wrong Symbol &#x2716;
//li (list)



                        //Funciton of adding//
function addTask(day) {
    let inputField = document.getElementById(day + "Input");
    let taskText = inputField.value.trim(); // spacing text

    if (taskText === "") return; // para dili mo add kung mo add ka nga way text ge butang 

    let list = document.getElementById(day + "List"); // ID name (each days)
    let noTasksMessage = document.getElementById(day + "NoTasks"); // Display No Task comment(kung wala pa ka add ang user ug task)

    let taskItem = document.createElement("li"); // create item (list)
    taskItem.classList.add("task-item"); // Add item (List)

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn" onclick="completeTask(this)">✔</button>   
        <button class="delete-btn" onclick="deleteTask(this)">✖</button>  
    `;

    list.appendChild(taskItem); // Adding task to the list
    inputField.value = "";  // Clear input tesk sa user kung naka add na 

    // Hide (No Task) if kung ang user mo add na ug task /Funtion/
    if (list.children.length > 0) {
        noTasksMessage.style.display = 'none';
    }
}



            //Function Check/Delete (mark)//      
// Function (Check)
function completeTask(button) {
    let taskItem = button.parentElement;
    taskItem.classList.toggle("completed"); // highlight mark check (green)
}

// Function (delete)
function deleteTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove(); //remove

    // Show (No task) if kung ang user wala pa hing add ug task /Funtion/
    let list = button.closest('.task-list');
    let noTasksMessage = document.getElementById(list.id.replace('List', 'NoTasks'));

    if (list.children.length === 0) {
        noTasksMessage.style.display = 'block';
    }
}


                    // Web Page Display //
// Display sa Web Page if kung wala pay task na add
window.onload = function() {
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']; // Days(each) Result sa "No Task"

    days.forEach(day => {
        let list = document.getElementById(day + "List");
        let noTasksMessage = document.getElementById(day + "NoTasks");

        // If no tasks are in the list, show the "No Tasks" message
        if (list.children.length === 0) {
            noTasksMessage.style.display = 'block';
        }
    });
};
