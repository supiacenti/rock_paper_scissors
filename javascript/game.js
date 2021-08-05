const computerChoice = document.getElementById('computer_choice')
const userChoice = document.getElementById('user_choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const computerImg = document.getElementById('computer_img')
const userImg = document.getElementById('user_img')
var computerScore = 0;
var userScore = 0;



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    uc = e.target.id
    userChoice.innerHTML = uc
    generateComputerChoice()
    getResult()
    generateImg()
    levelUp()
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
            userScore += 1
            result.innerHTML = "YOU WIN :)"
            $("#score_u").html(userScore)
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            computerScore += 1
            result.innerHTML = "YOU LOSE :("
            $("#score_c").html(computerScore)
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
            $("#computer_img").html('<img src="img/rock.png">')
            break
        case 'paper':
            $("#computer_img").html('<img src="img/paper.png">')
            break
        case 'scissors':
            $("#computer_img").html('<img src="img/scissorsleft.png">')
    }
    switch (uc) {
        case 'rock':
            $("#user_img").html('<img src="img/rock.png">')
            break
        case 'paper':
            $("#user_img").html('<img src="img/paper.png">')
            break
        case 'scissors':
            $("#user_img").html('<img src="img/scissorsright.png">')
    }
}

const levelUp = () => {
    switch (computerScore){
        case 10:
            $("#html").addClass("Level1");
            $(".player_c").css("background-color", "#ff4a4a");
            break
        case 20:
            $("#html").addClass("Level2");
            $(".player_c").css("background-color", "#FFB467");
            break
        case 40:
            $("#html").addClass("Level3");
            $(".player_c").css("background-color", "#F7D58B");
            break
        case 60:
            $("#html").addClass("Level4");
            $(".player_c").css("background-color", "#72C187");
            break
        case 80:
            $("#html").addClass("Level5");
            $(".player_c").css("background-color", "#67D2FF");
            break
        case 90:
            $("#html").addClass("Level6");
            $(".player_c").css("background-color", "#9584FF");
            break
        case 100:
            $("#html").addClass("Level7")
            $(".player_c").css("background-color", "#FF9EFF")
            $("#computer_img").html('<img src="img/100.gif">')
            computerScore = 0
            userScore = userScore - userScore
    }
    switch (userScore){
        case 10:
            $("#html").addClass("Level1");
            $(".player_u").css("background-color", "#ff4a4a");
            break
        case 20:
            $("#html").addClass("Level2");
            $(".player_u").css("background-color", "#FFB467");
            break
        case 40:
            $("#html").addClass("Level3");
            $(".player_u").css("background-color", "#F7D58B");
            break
        case 60:
            $("#html").addClass("Level4");
            $(".player_u").css("background-color", "#72C187");
            break
        case 80:
            $("#html").addClass("Level5");
            $(".player_u").css("background-color", "#67D2FF");
            break
        case 90:
            $("#html").addClass("Level6");
            $(".player_u").css("background-color", "#9584FF");
            break
        case 100:
            $("#html").addClass("Level7")
            $(".player_c").css("background-color", "#FF9EFF")
            $("#user_img").html('<img src="img/100.gif">')
            computerScore = computerScore - computerScore
            userScore = 0
    }
}
