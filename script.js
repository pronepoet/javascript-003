var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
    }


function addListAfter(){
    if (input.value.length > 0){
        createListElement();
    }
}

function addEventListener(event){
    if (input.value.length > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListAfter);
input.addEventListener("keypress", addEventListener
    );