function game(){
//get random rumber 0,1,2 and assign it into compValue
//if 0 return Rock 1 for paper 2 for Scissors
function getComputerChoice(){
    let compValue = Math.floor(Math.random() * 3)
    switch (compValue) {
        case 0:
            console.log('Rock');
            return 'Rock';
        case 1:
            console.log('Paper');
            return 'Paper';
        case 2:
            console.log('Scissors');
            return 'Scissors';
        default:
            console.log('Err');
            return 'Err';
    }
}
//prompt user to rock, paper or scissors
//save the result in playerSelection
//if the string is not among the three value, prompt again
//use getcomputerChoice function to assign the returned value into
//computer Selection.
//create a function that receives player,computer value
//if tolowercase value of them are the same return 'Draw!'
//else .. if rock for player scissor for computer or paper with
//rock or scissors with paper then return "You win!${player} beats ${computer}"
//         else, return "You Lose!${player} beats ${computer}""
function playRound(player,computer){
    return player ===computer ? "Draw"
          :player ==='rock' && computer === 'scissors' ||  player ==='scissors' && computer === 'paper' || player ==='paper' && computer === 'rock' ? `You win! ${player} beats ${computer}`
          : `You lose! ${computer} beats ${player}`;
}
let turn = true;
let playerSelection =''
while(turn){
    playerSelection = prompt("Select: Rock,Scissors,Paper").toLowerCase();
    if(playerSelection === 'rock' || playerSelection ==='paper' ||playerSelection ==='scissors'){
        turn =false;
    }
}
let computerSelection = getComputerChoice().toLowerCase();
 roundResult = playRound(playerSelection,computerSelection);
 alert(roundResult);
return roundResult
}
//function game()
//inside the game function call playRound function 5 times
//count number of wins
//if player > comp then alert player wins the game! alert count as well. same algorithm to the computer.
let playerScore=0;
let compScore=0;
for (let i=0;i<5;i++){ 
    let Resultstring ='';
    Resultstring=game();
    if (Resultstring === "Draw"){
    } else if (Resultstring.split(" ")[1] ==='win!'){
        playerScore +=1;
    } else {
        compScore +=1;
    }
}
if (playerScore > compScore){
    alert(`player wins the game! score ${playerScore}:${compScore}`)
} else if(playerScore < compScore){
    alert(`computer wins the game! score ${playerScore}:${compScore}`)
} else {
    alert(`Draw throughout the game! score ${playerScore}:${compScore}`)
}
