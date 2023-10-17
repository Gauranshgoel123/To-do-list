const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    
    if(inputBox.value === ''){
        alert("Task field cannot be empty!");
    }
    else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //cross icon
        li.appendChild(span);

    }
    inputBox.value = ""; //to remove task from input bar once its added
    saveData();
}

//add task even if enter key is pressed
inputBox.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//To keep data after reloading also
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();