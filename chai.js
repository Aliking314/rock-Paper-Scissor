let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

// Generating Computer choice
let gencompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randomindx = Math.floor(Math.random()*3)
    return options[randomindx];
}

// Selecting Choices

let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})


let playGame =(userChoice)=>{
    // user Choice
    console.log("User Choice is",userChoice);
   //  Computer Choice
       const compChoice = gencompChoice();
       console.log("Computer choice is" , compChoice);

    if(userChoice===compChoice){
     drawGame();
    } 
//   panga Done

else {
    let userWin = true;
    if (userChoice==="rock") {
        userWin = compChoice==="paper" ? false : true;
    }else if (userChoice==="paper"){
        userWin = compChoice==="scissors" ? false : true;
    } else{
        userWin = compChoice==="rock" ? false : true;
    }
    Winner(userWin,userChoice,compChoice);
 }
}


// Draw Game
const drawGame = ()=>{
    msg.innerText="Match Drawn 🔥"
    msg.style.backgroundColor="#010101"
    console.log("Game Drawn ")
}

// Show Winner

let msg = document.querySelector("#msg");

const Winner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText= userScore;
    msg.innerText=`You Win Your ${userChoice} beats ${compChoice} 😎`
    msg.style.backgroundColor="green"
    console.log("You Win");
  }
  else{
    compScore++;
    compScorePara.innerText= compScore;
    msg.innerText=`You Lose ${compChoice} beats Your ${userChoice} 😔`
    msg.style.backgroundColor="red"
    console.log("You Lose");
  }
}


