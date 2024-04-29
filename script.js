const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if (inputBox.value === ''){
        alert("you must write something")
    }else{
       let taskText = inputBox.value;
       let li = document.createElement("li");
        li.innerHTML= `
        ${taskText}
        <button class="delete-btn">Delete</button> `;
        listContainer.appendChild(li);
        inputBox.value = "";
         }
    
}

listContainer.addEventListener("click",function (event){
    if(event.target.classList.contains("delete-btn")){
        const li= event.target.parentElement;
        listContainer.removeChild(li)
    }
});


