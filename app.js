let gameSequence =[];
let userSequence = [];
let btns = ["one", "two", "three", "four"];
let started = false;
let level = 0;
let h2 = document.querySelector('h2');

//GAME STARTED
document.addEventListener('keypress', function(){
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }, 250)
}


function levelUp(){
    userSequence =[];
    level++;
    h2.innerText = `Level ${level}`;

    //Random btn choose
    let randomIndex= Math.floor(Math.random()*3);
    let randColor = btns[randomIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    console.log(gameSequence);
    btnFlash(randbtn);
}

function checkAns(idx){

    if (userSequence[idx] === gameSequence[idx]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp, 1200);
        }
    }else{
        h2.innerHTML =  `Game over!! Your Score was <b>${level} </b> <br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSequence.push(userColor);

    checkAns(userSequence.length-1);

}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns){
    btn.addEventListener('click', btnPress);
}


function reset(){
    started = false;
    userSequence = [];
    gameSequence = [];
    level =0;
}