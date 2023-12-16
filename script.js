// getting computer choice
const container = document.querySelector('#container');
const playButton = document.querySelector('#play');
const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissor = document.querySelector('#Scissor');
const panel = document.querySelector('#score');
const scores = document.createElement('p');
const record = document.createElement('div');
playButton.addEventListener('click',play);
rock.addEventListener('click', function () {
    playround('Rock');
});
paper.addEventListener('click', function () {
    playround('Paper');
});
scissor.addEventListener('click', function () {
    playround('Scissor');
});
let player_score = 0;
let comp_score = 0;
function getcomputerchoice() {
    let x = Math.floor(1 + Math.random() * 2.99);
    if (x == 1) {
        return "Rock";
    }
    if (x == 2) {
        return "Paper";
    }
    if (x == 3) {
        return "Scissor";
    }
}
function play () {
    unlockOptButtons();
    record.innerHTML = '';
    player_score = 0;
    comp_score = 0;
    displayScore();
}
function lockOptButtons () {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
function unlockOptButtons () {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}
function displayScore() {
    if (player_score == 5) {
        scores.textContent = 'You Won 🤩 by ' + player_score + ' - ' + comp_score;
        panel.appendChild(scores);
        player_score = 0;
        comp_score = 0;
        lockOptButtons();
    }
    else if (comp_score == 5) {
        scores.textContent = 'You Lost 🫠 by ' + player_score + ' - ' + comp_score;
        panel.appendChild(scores);
        player_score = 0;
        comp_score = 0;
        lockOptButtons();
    }
    else {
        scores.textContent =  player_score + ' '+'-  you   VS  comp -'+ ' '+comp_score;
        panel.appendChild(scores);
    }
}
// gameplay
function playround(string) {
    displayScore();
    playerselection = string;
    computerselection = getcomputerchoice();
    if (playerselection == "Rock") {
        if (computerselection == "Scissor") {
            player_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Rock, comp chose Scissor, Rock beats Scissor';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Paper") {
            comp_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Rock, comp chose Paper, Paper beats Rock';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Rock") {
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Rock, comp chose Rock, Its a tie!';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
    }
    if (playerselection == "Scissor") {
        if (computerselection == "Rock") {
            comp_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Scissor, comp chose Rock, Rock beats Scissor';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Paper") {
            player_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Scissor, comp chose Paper, Scissor beats Paper';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Scissor") {
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Scissor, comp chose Scissor, Its a tie!';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
    }
    if (playerselection == "Paper") {
        if (computerselection == "Rock") {
            player_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Paper, comp chose Rock, Paper beats Rock';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Scissor") {
            comp_score++;
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';
            result.textContent = 'You chose Paper, comp chose Scissor, Scissor beats Paper';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
        if (computerselection == "Paper") {
            const result = document.createElement('p');
            result.style.cssText = 'margin:10px; padding:10px; background-color:green';;
            result.textContent = 'You chose Paper, comp chose Paper, Its a tie!';
            record.appendChild(result);
            container.appendChild(record);
            displayScore();
            console.log("Player:", player_score);
            console.log("Computer:", comp_score);
        }
    }
}

