const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date();
    const mm = date.getMinutes();
    const hh = date.getHours();
    const ss = date.getSeconds();
    clockTitle.innerText = `${hh < 10 ? `0${hh}`: hh}:${mm < 10 ? `0${mm}`: mm}:${ss < 10 ? `0${ss}`: ss}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();