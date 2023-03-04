const userChoiceDisplay = document.getElementById('user-choice')
const botChoiceDisplay = document.getElementById('bot-choice')
const resultDisplay = document.getElementsByClassName('result')
var possibleChoices = document.querySelectorAll('.selection')
const reloadBtn = document.querySelector('.reload')

//for player choice//
possibleChoices.forEach(possibleChoice => possibleChoice.   addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateBotChoice()
    getResult()
}))

//for computer choice random//
function generateBotChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length  )
    if(randomNumber == 0) {
        botChoice = "👊🏿"
    }
    if(randomNumber == 1) {
        botChoice = "🖐🏿"
    }
    if(randomNumber == 2) {
        botChoice = "✌🏿"
    }
    botChoiceDisplay.innerHTML = botChoice   
}

// lose or win display  with incrementing of score//   
let textResult = document.querySelector('#result')
let botChoice = botChoiceDisplay.innerHTML
let userChoice = userChoiceDisplay.innerHTML

const computerScore = document.querySelector('p.c-count')
const userScore = document.querySelector('p.p-count')
let botScore = 0;
let yourScore = 0;

function getResult(){
    let result = (botChoice === userChoice) ? 'Tie!!' : 
        (userChoice == "👊🏿" && botChoice == "🖐🏿") ? "You Lose!!":
        (userChoice == "👊🏿" && botChoice == "✌🏿") ? "You Win!!" :
        (userChoice == "🖐🏿" && botChoice == "👊🏿") ? "You Win!!": 
        (userChoice == "🖐🏿" && botChoice == "✌🏿") ? "You Lose!!": 
        (userChoice == "✌🏿" && botChoice == "👊🏿") ? "You Lose!!" :
        (userChoice == "✌🏿" && botChoice == "🖐🏿") ? "You Win!!" : ''
        textResult.innerHTML = result
    
        if (result == "You Win!!"){
            yourScore++;
            userScore.innerHTML = yourScore
        }
        if(result == "You Lose!!"){
            botScore++;
            computerScore.innerHTML = botScore
        }
    // Alert Game Over
        if(yourScore === 5){
            alert("GAME OVER: You WIN!!!")
        }
        if(botScore === 5){
            alert("GAME OVER: You LOST!!!")
        }
}

//reload button//
reloadBtn.innerText = 'Reset'
reloadBtn.addEventListener('click',() => {
window.location.reload();
})
