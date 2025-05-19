 let userScore =0 ;
 let computerScore =0;



 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

  
 const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#Computer-score")


const genComputerChoice = () => { 
        const option =["rock","paper","scissors"];
      const randIdx =Math.floor(Math.random()*3);
      return  option[randIdx];
};
const drawGame = () => {
      msg.innerText = "game was draw ,Play again !";
      msg.style.backgroundColor = "#081b31 ";
};
const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore ;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else{
        computerScore++;
        compScorepara.innerText = computerScore ;
        msg.innerText =  `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
};

const playGame = (userChoice)=>{
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin= true;
        if (userChoice === "rock"){ //scissors,paper
            userwin = compChoice === "paper"? false : true ;
        }
        else if
            (userChoice === "paper"){
                //rock, scissor
                userwin = compChoice === "scissors" ? false : true;
          }
          else{
            userwin = compChoice === "rock" ? false : true;
          }
          showWinner(userwin,userChoice,compChoice);

        }
        //Drow Gane
};

 choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);

      
    });
 });