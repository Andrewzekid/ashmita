const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const jokeBtn = document.querySelector(".joke-btn");
const quotes = document.querySelector(".quotes-btn");
const loveletter = document.querySelector(".loveletter");
const downBtn = document.querySelector(".down-btn");

jokeBtn.addEventListener("click", () => {
    window.location.href = "joke.html"
})

downBtn.addEventListener("click", () => {
    window.location.href = "down.html"
})

quotes.addEventListener("click", () => {
    window.location.href = "quotes.html"
})
