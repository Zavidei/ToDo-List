let addElement = () => {
    let enterContent = document.getElementById("myInput");
    let valueContent = enterContent.value;
    let taskList = document.querySelector(".task_list")
    let voidString = /^\s*$/;
    if (!voidString.test(valueContent)) {
        let newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `

                    <div class="text">
                        <p>${valueContent}</p>
                    </div>
                    <div class="buttonOption" >
                        <img src="images/check.svg" alt="check" class=" check">
                        <img src="images/trash.svg" alt="trash" class=" trash">
                    </div>
                `;
         taskList.appendChild(newTask);
        enterContent.value = "";
        tasksArr.push(newTask);
    }
};

const Addbutton = document.querySelector(".add");
Addbutton.addEventListener("click", addElement);

let inputSpace = document.querySelector("input");
inputSpace.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addElement();
    }
})

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("trash")) {
        let storage = event.target.closest(".task");
        taskDelete.push(storage);
        for(let i = 0; i < tasksArr.length; i++){
            if(tasksArr[i] === storage){
                tasksArr.splice(i,1);
            }
        }
        event.target.closest(".task").remove();
    }
})

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("check")) {
        let storage = event.target.closest(".task");
        taskComplete.push(storage);
        for(let i = 0; i < tasksArr.length; i++){
            if(tasksArr[i] === storage){
                tasksArr.splice(i,1);
            }
        }
        event.target.closest(".task").remove();
    }
})


let optionTask = () => {
    displayTask(tasksArr,false)
}

const buttonOptionTask = document.querySelector(".buttonOptionTask");
buttonOptionTask.addEventListener("click", optionTask);

let optionDelet = () => {
    displayTask(taskDelete,true)
}

const buttonOptionDelete = document.querySelector(".buttonOptionDelet");
buttonOptionDelete.addEventListener("click", optionDelet)

let optionComplete = () => {
    displayTask(taskComplete,true)
}

const buttonOptionComplete = document.querySelector(".buttonOptionComplet");
buttonOptionComplete.addEventListener("click", optionComplete)

function displayTask(arr,hideButton){
    let taskList = document.querySelector(".task_list");
    taskList.innerHTML = "";
    arr.forEach(task => {
        taskList.appendChild(task.cloneNode(true));
    });
    taskList.classList.add("display");
    taskList.classList.remove("noDisplay");
    let buttons = document.querySelectorAll(".buttonOption")
    let input = document.querySelector('input');
    let add = document.querySelector(".add")
    if(hideButton){
        buttons.forEach(element => element.classList.add("noDisplay"));
        input.classList.add("noDisplay");
        add.classList.add("noDisplay");
    }else{
        buttons.forEach(element => element.classList.remove("noDisplay"));
        input.classList.remove("noDisplay");
        add.classList.remove("noDisplay");
    }
}

let taskDelete = [];
let taskComplete = [];
let tasksArr = [];

