const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    hello = document.querySelector(".js-hello");

const USER_LS = "currentUser",
    SHOW_CN = "show";









function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentValue = input.value;
    paintHello(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintHello(text) {
    form.classList.remove(SHOW_CN);
    hello.classList.add(SHOW_CN);
    hello.innerText = `Hello ${text}`;
}
function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser !== null) {
        paintHello(currentUser);
    } else {
        askForName();
    }
}

function init() {
    loadNmae();
}

init();