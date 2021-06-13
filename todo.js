const toDoForm = document.querySelector(".js-todo"),
    toDoInput = toDoForm.querySelector("input"),
    pendingDiv = document.querySelector(".pending-div"),
    finishedDiv = document.querySelector(".finished-div");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";
let idNum = 0;
let pendingList = [];
let finishedList = [];

function uncheckList(event){
    const target = event.target;
    const delBtn = target.parentNode;
    finishedDiv.removeChild(delBtn); // html delete
    const modifiedFinished = finishedList.filter(function(li){
        if(li.id !== parseInt(delBtn.id)){
            return true;
        } else {
            addPending(li.text);
            return false;
        }
    });
    finishedList = modifiedFinished;
    saveFinished();
}

function deleteFinished(event){
    const target = event.target;
    const delBtn = target.parentNode;
    finishedDiv.removeChild(delBtn); // html delete
    const modifiedFinished = finishedList.filter(function(li){
        return li.id !== parseInt(delBtn.id);
    });
    finishedList = modifiedFinished;
    saveFinished();
}

function saveFinished(){
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedList));
}

function addFinished(text){
    const li = document.createElement("li");
    li.id = ++idNum;
    const uncheckBtn = document.createElement("button");
    uncheckBtn.addEventListener("click", uncheckList);
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteFinished);
    uncheckBtn.innerText = "🔳";
    span.innerText = text;
    delBtn.innerText = "✖";
    li.appendChild(uncheckBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    finishedDiv.appendChild(li); // html add
    newObj = {
        text: text,
        id: idNum
    };
    finishedList.push(newObj);
    saveFinished();
}

function checkList(event){
    const target = event.target;
    const tarList = target.parentNode;
    pendingDiv.removeChild(tarList); // html delete
    const modifiedList = pendingList.filter(function(li){
        if(li.id !== parseInt(tarList.id)){
            return true;
        } else {
            addFinished(li.text);
            return false;
        }
    });
    pendingList = modifiedList;
    savePending();
}

function deletePending(event){
    const target = event.target;
    const tarList = target.parentNode;
    pendingDiv.removeChild(tarList); // html delete
    const modifiedList = pendingList.filter(function(li){
        return li.id !== parseInt(tarList.id);
    });
    pendingList = modifiedList;
    savePending();
}

function savePending(){
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingList));
}

function addPending(text){
    const li = document.createElement("li");
    li.id = ++idNum;
    const checkBtn = document.createElement("button");
    checkBtn.addEventListener("click", checkList);
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deletePending);
    checkBtn.innerText = "⬜";
    span.innerText = text;
    delBtn.innerText = "✖";
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    pendingDiv.appendChild(li); // html add
    newObj = {
        text: text,
        id: idNum
    };
    pendingList.push(newObj);
    savePending();
}

function handleInput(event){
    event.preventDefault();
    const InputText = toDoInput.value;
    addPending(InputText);
    toDoInput.value = "";
}

function loadList(){
    const loadedPending = localStorage.getItem(PENDING_LS);
    const loadedFinished = localStorage.getItem(FINISHED_LS);
    if(loadedPending !== null || loadedFinished !== null){
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function(pen){
            addPending(pen.text);
        });
        const parsedFinished = JSON.parse(loadedFinished);
        parsedFinished.forEach(function(fin){
            addFinished(fin.text);
        });
    }
}

function init(){
    loadList();
    toDoForm.addEventListener("submit", handleInput);
}

init();