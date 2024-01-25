let addElement = () => {
    let enterContent = document.getElementById("myInput");
    let valueContent = enterContent.value;
    let taskList = document.querySelector(".task_list")
    if(valueContent == ""){

    }else{
    taskList.innerHTML += `
    <div class="task">
        <p>${valueContent}</p>
    </div>`;
    enterContent.value = "";
    }
};

const button = document.querySelector(".add");
button.addEventListener("click", addElement);

