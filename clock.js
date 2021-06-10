const jsClock = document.querySelector(".js-clock"),
    h1 = jsClock.querySelector("h1");

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    h1.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute}:${
    second < 10 ? `0${second}` : second}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();