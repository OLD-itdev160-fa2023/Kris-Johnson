//array to hold task
var tasks=[];

//task status 'enum'
var taskStatus = {
    active:'active',
    completed:'completed' 
};

//Task constructor function
function Task (id, name, status){
    this.id= id;
    this.name= name;
    this.status= status;
}

//Create a new task element and adds it to the DOM
function addTaskElement (task){
    //create elements
var listEl= document.getElementById('active-list');
var taskEl= document.createElement('li')
var textEl= document.createTextNode(task.name);


//set attributes
taskEl.setAttribute('id', task.id);

//add text to task element
taskEl.appendChild(textEl);
//Add task element to list
listEl.appendChild(taskEl);
}

//Click handler to ad a new task
function addTask (event){
    var inputEL = document.getElementById('input-task');
    if (inputEL.value != ''){
        // create a unique id
        var id = 'item-' + tasks.length;

        //Create a new task
        var task= new Task(id, inputEL.value, taskStatus.active);
        tasks.push(task);

        //Add the task to the DOM
        addTaskElement(task);

        //reset input
        inputEL.value='';
    }
}

//handler to complete tasks
function completeTask (event){
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in task array and update status
    for(var i = 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //move task element from active list to complete list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton(event){
    if(event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//initializes the app
function init(){
    //Wire up the add task button click handler
    document.getElementById('add-task').onclick= addTask;

    //Wire up the task completed list item click handler
    document.getElementById('active-list').onclick= completeTask;
    
    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress= clickButton;

}

init();