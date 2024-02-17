const answerBtn = document.querySelector(".answer-btn1")
const questionText = document.querySelector(".question")
answerBtn.addEventListener("click", () => {
    questionText.innerHTML = "Because she is very fishy!"
    answerBtn.innerHTML = "Next Joke"
    answerBtn.onclick = addRedirect()
})

function addRedirect() {
    answerBtn.addEventListener("click",() => {
        window.location.href = "joke2.html"
    })
}