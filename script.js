let userscore =0;
let compscore =0;

const whowins = document.querySelector("#whowins");
const score = document.querySelector("#score");

function startGame(e){
    let userchoice = e;
    let compchoices = ["rock", "paper", "scissors"];    
    let compChoice = compchoices[Math.floor(Math.random()*3)];
    whowins.classList="";

    let winner=compare(userchoice, compChoice);

    if(winner == "user"){
        whowins.innerHTML=  "USER WON";
        whowins.classList.add("win");
    }else if(winner == "comp"){
        whowins.innerHTML= "COMPUTER WON";
        whowins.classList.add("lose");
    }else{
        whowins.innerHTML= "TIE";
        whowins.classList.add("tie");
    }

    score.innerHTML = `<span class="sides">User: ${userscore}</span>
                       <span class="sides">Computer: ${compscore}</span>`

}

function compare(choice1, choice2){

    if(choice1 === choice2){
        return "tie";
    }
    else if(choice1==="rock"){
        if(choice2==="paper"){
            compscore++;
            return "comp";
        }else{
            userscore++;
            return "user";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            compscore++;
            return "comp";
        }else{
            userscore++;
            return "user";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="rock"){
            compscore++;
            return "comp";
        }else{
            userscore++;
            return "user";
        }
    }
}