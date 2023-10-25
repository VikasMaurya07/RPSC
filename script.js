// getting computer choice
function getcomputerchoice() {
    let x  = Math.floor(1 + Math.random()*2.99);
    if(x == 1) {
        return "Rock";
    }
    if(x == 2) {
        return "Paper";
    }
    if(x == 3) {
        return "Scissor";
    }
}
// getting user input
function userinput() {
    const user_string = prompt("Enter your choice (rock, paper or scissor):");
    return user_string.charAt(0).toUpperCase() + user_string.slice(1).toLowerCase();
}
// gameplay
function playround() {
    player_score = 0;
    comp_score = 0;
    while (player_score!=5&&comp_score!=5){
        playerselection = userinput();
        computerselection = getcomputerchoice();
        if(playerselection == "Rock") {
            console.log("You chose Rock");
            if (computerselection == "Scissor") {
                console.log("Comp chose Scissor");
                player_score++;
                console.log("Rock beats Scissors!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Paper") {
                console.log("Comp chose Paper");
                comp_score++;
                console.log("Paper beats rock!");
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Rock"){
                console.log("Comp chose Rock");
                console.log("It's a tie!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
        }
        if(playerselection == "Scissor") {
            console.log("You chose Scissor");
            if (computerselection == "Rock") {
                console.log("Comp chose Rock");
                comp_score++;
                console.log("Rock beats Scissors!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Paper") {
                console.log("Comp chose Paper");
                player_score++;
                console.log("Scissor beats paper!");
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Scissor") {
                console.log("Comp chose Scissor");
                console.log("It's a tie!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
        }
        if(playerselection == "Paper") {
            console.log("You chose Paper");
            if (computerselection == "Rock") {
                console.log("Comp chose Rock");
                player_score++;
                console.log("Paper beats Rock!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Scissor") {
                console.log("Comp chose Scissor");
                comp_score++;
                console.log("Scissor beats paper!");
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
            if (computerselection == "Paper") {
                console.log("Comp chose Paper");
                console.log("It's a tie!")
                console.log("Player:",player_score);
                console.log("Computer:",comp_score);
            }
        }
    }
    if (player_score==5) {
        console.log("You Win");
    }
    else {
        console.log("Comp wins");
    }
    playround();
}
playround();

