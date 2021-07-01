const frame = document.querySelector(".calendar.frame"),
    monthFrame = document.querySelector(".month"),
    dayFrame = document.querySelector(".day"),
    dateFrame = document.querySelector(".date");

const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth(),
    // day = today.getDay();
    date = today.getDate();

function makeCalendar(){
    monthFrame.innerText = date +" "+ monthList[month] + " "+ year;
    dayList.forEach(a => dayFrame.innerText += " " + a);
    const firstDate = new Date(year, month, 1), // 이번 달 1일
        lastDate = new Date(year, month +1, 0); // 이번 달 마지막 일
    // for(var i=0; i<)
    console.log(lastDate);
}

function init(){
    makeCalendar();
}

init();