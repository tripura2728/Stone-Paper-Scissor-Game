//Variables at the Top
let userScore = 0;
let compscore = 0;

//Get Buttons from HTML
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")


//generateing computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//creating a draw game (or) handle draw
const drawGame = () =>{ 
    message.innerText = "Game was Draw.Play again"
    message.style.background = "#081b31"
}

// creating a show  winner and update scores
const showWinner = (userWin, userChoice, compChoice) => { 
    if(userWin) { 
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        message.style.background = "green"
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        message.innerText = `You lost!  ${compChoice} beats Your ${userChoice}`
        message.style.background = "red"
    }
};


//Game Logic
const playGame = (userChoice) => {
    console.log("user choice  =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice){
        drawGame();// useing draw game
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;//scissors, paper -rock
        } else if (userChoice === "paper") {
            userWin = compChoice ==="scissors" ? false : true;//rock, scissors  -paper
        } else {
            userWin = compChoice ==="rock" ? false : true;//rock, papper -scissor 
        }
        showWinner(userWin, userChoice, compChoice);
    }

}


//creating user clickble choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{  
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});




