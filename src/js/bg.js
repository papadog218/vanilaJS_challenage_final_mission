const body = document.querySelector("body"),
    IMG_NUM = 5;



function handleImgLoad() {
    console.log("img is ready");
} // 원격에서 하는게 아니면 필요없다고 지워버림;;

function paintImg(imgNum) {
    const img = new Image();
    img.src = `src/img/${imgNum}.jpg`;
    img.classList.add("bgImg");
    // appendChild()는 해당 태그안에 제일 밑에 생성된다 (제일 위에는 prepend())
    // body.prepend(img);
    body.prepend(img);
    // 원격에서 하는게 아니면 필요없다고 지워버림;;
    img.addEventListener("loadend", handleImgLoad); 
}
function getRandom() {
    const num = Math.floor(Math.random()*IMG_NUM) + 1;
    return num;
}

function init() {
    const randeomNum = getRandom();
    paintImg(randeomNum);
}
init();