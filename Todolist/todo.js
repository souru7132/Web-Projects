const inputBox =document.getElementById("input-box")
const list =document.getElementById("list")
function addTask(){
    if(inputBox.value === ''){
        alert("You must write Something!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list.appendChild(li);//16.00
        let span =document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
}

list.addEventListner("click", function(e){
    if(e.target.tagName === "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
saveData();