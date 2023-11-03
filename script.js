document.addEventListener("DOMContentLoaded", () => {
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn =document.querySelector(".row button")

addBtn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("You must write something..")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value='';
})
});

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something..")
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML =inputBox.value;
//         listContainer.appendChild(li);
//     }
//     // inputBox.value='';
// }
