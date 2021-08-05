const computerChoice = document.getElementById('computer_choice')
const userChoice = document.getElementById('user_choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const computerImg = document.getElementById('computer_img')
const userImg = document.getElementById('user_img')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    uc = e.target.id
    userChoice.innerHTML = uc
    generateComputerChoice()
    getResult()
    generateImg()
}))

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * (possibleChoices.length + 1))
    if (randomNumber == 0) {
        generateComputerChoice();
    } else {
        switch (randomNumber) {
            case 1:
                cc = "rock"
                computerChoice.innerHTML = cc
                break;
            case 2:
                cc = "paper"
                computerChoice.innerHTML = cc
                break;
            case 3:
                cc = "scissors"
                computerChoice.innerHTML = cc
        }
        console.log(randomNumber)
        console.log(uc + cc)
    }
}
const getResult = () => {
    switch(uc + cc) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result.innerHTML = "YOU WIN :)"
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result.innerHTML = "YOU LOSE :("
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            result.innerHTML = "YOU ARE TIED :|"
    }
}
const generateImg = () => {
    switch (cc) {
        case 'rock':
            var conteudo = $("#computer_img").html();
            $("#computer_img").html('<img src="img/rock.png">')
            break
        case 'paper':
            var conteudo = $("#computer_img").html();
            $("#computer_img").html('<img src="img/paper.png">')
            break
        case 'scissors':
            var conteudo = $("#computer_img").html();
            $("#computer_img").html('<img src="img/scissorsleft.png">')
    }
    switch (uc) {
        case 'rock':
            var conteudo = $("#user_img").html();
            $("#user_img").html('<img src="img/rock.png">')
            break
        case 'paper':
            var conteudo = $("#user_img").html();
            $("#user_img").html('<img src="img/paper.png">')
            break
        case 'scissors':
            var conteudo = $("#user_img").html();
            $("#user_img").html('<img src="img/scissorsright.png">')
    }
}