const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    greetingToDo = document.querySelector(".js-todo");

const USER_LS = "username";

function saveUser(name){
    localStorage.setItem(USER_LS, name);
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

function loadUser(){
    const username = localStorage.getItem(USER_LS);
    greeting.innerText = `Hello, ${username}!
    What do you do today?`;
    greetingToDo.classList.remove("blind");
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