const table = document.querySelector(".calendar-table"),
    calMonth = document.querySelector(".calendar-month"),
    body = document.querySelector(".calendar-body"),
    prev = document.querySelector(".prev-btn"),
    next = document.querySelector(".next-btn");

const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today = new Date();
    let year = today.getFullYear(),
    month = today.getMonth(),
    // day = today.getDay();
    date = today.getDate();

function cleanCalendar(){
    while(body.hasChildNodes()){
        body.removeChild(body.lastChild);
    }
}

function prevBtn(){
    cleanCalendar();
    makeCalendar(new Date(year, month-1, 1));
}

function nextBtn(){
    cleanCalendar();
    makeCalendar(new Date(year, month+1, 1));
}

function makeCalendar(firstDate){
    month = firstDate.getMonth();
    calMonth.innerText = monthList[month] + " " + year;
    // const firstDate = new Date(year, month, 1), // 이번 달 1일
    const lastDate = new Date(year, month +1, 0); // 이번 달 마지막 일
    let count = 0;
    // tr을 만들고 그 안에 td 7개 넣고 행바꿔서 tr만들기. lastdate까지 하면 끝
    const firstTr = document.createElement("tr");
    body.appendChild(firstTr);
    for(var i=0; i<firstDate.getDay(); i++){
        const td = document.createElement("td");
        td.innerHTML = "*";
        firstTr.appendChild(td);
        count++;
    }
    for(var i=0; i<lastDate.getDate(); i++){
        if(count === 7) {
            body.appendChild(document.createElement("tr"));
            count = 0;
        }
        const td = document.createElement("td");
        td.innerHTML = i+1;
        body.lastChild.appendChild(td);
        count++;
    }
}

function loadCalendar(){
    const firstDate = new Date(year, month, 1);
    makeCalendar(firstDate);
}

function init(){
    loadCalendar();
    prev.addEventListener("click",prevBtn);
    next.addEventListener("click", nextBtn);
}

init();