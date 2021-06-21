const askingName = document.querySelector(".js-form"),
    input = askingName.querySelector("input"),
    greetingDiv = document.querySelector(".greeting-div"),
    greeting = document.querySelector(".js-greeting"),
    askingToDo = document.querySelector(".js-todo"),
    listDiv = document.querySelector(".list-div");

const USER_LS = "username";

function saveUser(name){
    localStorage.setItem(USER_LS, name);
}

function checkAskingName(){
    const isAskingNameBlind = askingName.classList.contains("blind");
    if(!isAskingNameBlind){
        askingName.classList.remove("blind");
    } 
    if(isAskingNameBlind) {
        greeting.classList.remove("blind");
        askingToDo.classList.remove("blind");
    }
}

function handleInput(event){
    event.preventDefault();
    saveUser(input.value);
    askingName.classList.add("blind");
    checkAskingName();
    loadUser();
}

function addUser(){
    askingName.classList.remove("blind");
    askingName.addEventListener("submit", handleInput);
}

function deleteName(){
    removeAlert();
    localStorage.setItem(USER_LS,"");
    input.value = "";
    greeting.classList.add("blind");
    askingToDo.classList.add("blind");
    addUser();
}

function alertRename(){
    const alert = document.createTextNode("You can doubleclick and rename");
    greetingDiv.prepend(alert);
}

function removeAlert(){
    const children = greetingDiv.childNodes;
    if(children.length === 4) {
        greetingDiv.removeChild(children[0]);
    }
}

function handleInterval(){
    const children = greetingDiv.childNodes;
    if(children.length===3){
        alertRename();
        setTimeout(removeAlert, 3000);
    }
    greeting.addEventListener("dblclick", deleteName);
}

function loadUser(){
    const username = localStorage.getItem(USER_LS);
    greeting.innerText = `Hello ${username}`;
    checkAskingName();
    greeting.addEventListener("mouseover", handleInterval);
    listDiv.classList.remove("blind");
}

function checkName(){
    if(localStorage.getItem(USER_LS) === null){
        addUser();
    } else {
        loadUser();
    }
}

function init(){
    checkName();
}

init();