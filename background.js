const body = document.querySelector("body");

const IMG_NUM = 5;


function loadImage(num){
    const img = new Image();
    img.src = `images/${num}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function getNum(){
    return Math.floor(Math.random() * IMG_NUM)+1;
}

function init(){
    const randNum = getNum();
    loadImage(randNum);
}

init();