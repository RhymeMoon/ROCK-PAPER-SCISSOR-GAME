const botChoiceDisplay = document.getElementById('bot-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.selection')

possibleChoices.forEach(possibleChoice => possibleChoice.   addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateBotChoice()
    getResult()

}))
 
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

const playerScoreBoard = document.querySelector('.p-count')
const computerScoreBoard = document.querySelector('.c-count')
const result = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;

    

function getResult(){

    if (botChoice === userChoice){
        result.textContent = 'Tie !!'
        result.style.color = "black"
    }
    else if (botChoice == "👊🏿") {
        if (userChoice == "✌🏿"){
        result.textContent = 'Computer Won !!';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        result.style.color = "red"
       
        

    }
    else {
        result.textContent = 'Player Won !!'
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        result.style.color = "green"
       
        }
    }
    else if(botChoice === "👊🏿"){
        if(userChoice == "🖐🏿"){
            result.textContent = 'Player Won !!'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            result.style.color = "green"

        }
        else{
            result.textContent = 'Computer Won !!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            result.style.color = "red"
        }
    }
    else if(botChoice === "🖐🏿"){
        if(userChoice == "✌🏿"){
            result.textContent = 'Player Won !!'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            result.style.color = "green"
        }
        else{
            result.textContent = 'Computer Won!!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            result.style.color = "red"
        }
    }
    else if(botChoice === "✌🏿"){
        if(userChoice == "👊🏿"){
            result.textContent = 'Player Won !!'
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            result.style.color = "green"
        }
        else{
            result.textContent = 'Computer Won !!';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            result.style.color = "red"
        }
    }
        
}

const reloadBtn = document.querySelector('.reload');

reloadBtn.innerText = 'Reset'
reloadBtn.addEventListener('click',() => {
window.location.reload();
})



