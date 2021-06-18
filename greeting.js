const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    greetingToDo = document.querySelector(".js-todo"),
    listDiv = document.querySelector(".list-div");

const USER_LS = "username";

function saveUser(name){
    localStorage.setItem(USER_LS, name);
    const blindClass = greeting.classList.contains("blind");
    if(blindClass){
        greeting.classList.remove("blind");
    }
}

function handleInput(event){
    event.preventDefault();
    saveUser(input.value);
    loadUser();
    form.classList.add("blind");
}

function addUser(){
    form.classList.remove("blind");
    form.addEventListener("submit", handleInput);
}

function deleteName(){
    localStorage.setItem(USER_LS,"");
    input.value = "";
    greeting.classList.add("blind");
    addUser();
}

function handleMouse(){
    greeting.innerText = "You can doubleclick and rename";
    greeting.addEventListener("mouseleave", loadUser);
    greeting.addEventListener("dblclick", deleteName);
}

function loadUser(){
    console.log("func load");
    const username = localStorage.getItem(USER_LS);
    greeting.innerText = `Hello, ${username}!
What do you do today?`;
    greeting.addEventListener("mouseover", handleMouse);
    greetingToDo.classList.remove("blind");
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