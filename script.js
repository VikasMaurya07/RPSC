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
comp_output = getcomputerchoice();
// getting user input
function userinput() {
    user_string = prompt()
}