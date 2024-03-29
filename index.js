let isAlive = false
let hasBlackJack = false
let message = "Want to play a Round ?"
let sum = 0
let cards = []
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
let moneyEl = document.getElementById("moneyMess")

let player = {
    name : "Ritesh",
    chips : 200
}

playerEl.textContent = player.name + " : $ " + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard,secondCard]
    renderGame()
}
function renderGame(){

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    if(sum < 21){
        message = "Do you want to draw a card ?"
    }
    else if(sum === 21){
        message = "You've got a BlackJack !"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game.. Start again!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}


function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let randomCard = getRandomCard()
        sum += randomCard
        cards.push(randomCard)
        renderGame()
    }

}
    // if(sum > 21){
    //     player.chips -=  50
    // }
    // else if(sum === 21){
    //     player.chips *= 1.5
    // }
    // playerEl.textContent = player.name + " : $ " + player.chips