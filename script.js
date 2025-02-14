const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const jokeBtn = document.querySelector(".joke-btn");
const quotes = document.querySelector(".quote-btn");
const loveletter = document.querySelector(".loveletter");
const generateBtn = document.querySelector(".generate-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const downBtn = document.querySelector(".down-btn");
const noBtnRect = noBtn.getBoundingClientRect();

function addRedirect() {
    yesBtn.addEventListener("click",() => {
        window.location.replace("/ourstory.html")
    })
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yayyyyy! :)";
    yesBtn.innerHTML = "Open when"
    yesBtn.onclick = addRedirect()
});

noBtn.addEventListener("mouseover", () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j+"px";
});

jokeBtn.addEventListener("click", () => {
    window.location.href = "joke.html"
})

downBtn.addEventListener("click", () => {
    window.location.href = "down.html"
})

quotes.addEventListener("click", () => {
    window.location.href = "quotes.html"
})
generateBtn.addEventListener("click",() => {

})