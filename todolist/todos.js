const inputTaskElement = document.querySelector('#task');
const listTasksElement = document.querySelector('#tasks ul'); 
const buttonAddTaskElement = document.querySelector('#addtask');
const items = 'items';
var tasks = loadTasks();

renderTasks();

function addTask(){
    const task = inputTaskElement.value;
    tasks.push(task);
    saveTask();
    renderTasks();
    inputTaskElement.value = '';
}

function removeTask(indexTask){
    tasks.splice(indexTask, 1);
    saveTask();
    renderTasks();
}

function renderTasks(){
    listTasksElement.innerHTML = ''; //clean list
    for (task of tasks){
        //render

        //add li (item list)
        var itemListElement = document.createElement("li");
        itemListElement.appendChild(document.createTextNode(task));
        //add a
        var linkElement = document.createElement("a");
        linkElement.appendChild(document.createTextNode("Excluir"));
        linkElement.setAttribute('href', '#');
        //add function
        linkElement.setAttribute('onclick','removeTask('+ tasks.indexOf(task) +')');
        
        itemListElement.appendChild(linkElement);
        listTasksElement.appendChild(itemListElement);
    }
}

function saveTask(){
    localStorage.setItem(items, JSON.stringify(tasks));
}

function loadTasks(){
    return JSON.parse(localStorage.getItem(items)) || [];
}