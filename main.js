
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
        name : "Henry ",
        chips : 145
    }

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard () {

let randomNumber = Math.floor(Math.random() * 6) + 1

    if ( randomNumber > 10) {
        return 10
    }

    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
    
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}


function renderGame() {

   
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent  += cards[i] + " "
    }

    if (sum <= 20) {

        // console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
        
    }
    
    else if (sum === 21) {
        // console.log("Wohoo! You've got Blackjack!")
        message = "Wohoo! You've got Blackjack!" 
        hasBlackJack = "Has blackJack? " + true
    }
    
    else {
        // console.log("Sorry, you're out of the game")
        message = "Sorry, you're out of the game"
        isAlive = "still in the game: " + false
    }
    
    
    messageEl.textContent = message

}


function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let secondCard = getRandomCard()
        sum += secondCard
        cards.push(secondCard)
        renderGame()
    }
    
    
    
    
    // cardsEl.textContent  = cards
    // sumEl.textContent = "Sum: " + sum
}









// age = 74

// if (age < 21) {
//     console.log(" You can't enter the club ")

// }

// else {
//     console.log("Welcome! You are permitted to enter the club")
// }


// let ageM = 1000

// if (ageM < 100) {
//     console.log("Not eligible")
// }

// else if (ageM === 100) {
//     console.log("Here is your birthday card from the King!")
// }

// else {
//     console.log("Not eligible you have already gotten one")
// }