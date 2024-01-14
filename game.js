let choices = document.querySelectorAll(".option");
let msg = document.querySelector("#msg");
let userChoicepara = document.querySelector("#userScore");
let compChoicepara = document.querySelector("#compScore");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

let compChoiceGen = () => {
    let str = ["snake", "water", "gun"];
    let randomIdx = Math.floor(Math.random() * 3);
    return str[randomIdx];
}

let playGame = (userChoice) => {
    let compChoice = compChoiceGen();

    if(userChoice === compChoice) {
        draw();
    } else {
        let userWin;
        if(userChoice === "snake") {
            userWin = compChoice === "water"? true: false;
        } else if(userChoice === "water") {
            userWin = compChoice === "gun"? true: false;
        }else {
            userWin = compChoice === "snake"? true: false;
        }
        showResult(userWin, userChoice, compChoice);
    }
}

let draw = () => {
    msg.innerText = "It was a Draw! Play Again";
    msg.style.backgroundColor = "black";
}

let userScore = 0;
let compScore = 0;
let showResult = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `Congrats You Win! Your ${userChoice} beats my ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userChoicepara.innerText = userScore;
    } else {
        msg.innerText = `Sorry You lose! My ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compChoicepara.innerText = compScore;
    }
}