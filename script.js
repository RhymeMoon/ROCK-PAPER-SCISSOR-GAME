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

        if (result == "Tie!!"){
            document.getElementById('result').style.color = "blue"
        }
        if (result == "You Win!!"){
            yourScore++;
            userScore.innerHTML = yourScore;
            document.getElementById('result').style.color = 'green'
        }
        if(result == "You Lose!!"){
            botScore++;
            computerScore.innerHTML = botScore
            document.getElementById('result').style.color = 'red'
        }
// Game Over alert with automatic reload//
        if(yourScore === 10){
           alert("Gam Over \nYou WIN!!!");
            window.location.reload();
        }
        if(botScore === 10){
            alert("Game Over \nYou LOST!!!")
            window.location.reload();
        }
}

