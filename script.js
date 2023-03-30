
var advice = document.getElementById("advice")
var answer = document.getElementById("answer")
var click = document.getElementById("click-icon")

click.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
    .then(Response => Response.json())
    .then(data => {
    advice.textContent = `ADVICE #${data.slip.id}`;
    answer.textContent = `"${data.slip.advice}"`;
    })
})