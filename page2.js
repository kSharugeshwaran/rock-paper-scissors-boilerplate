//making the  input buttons functional
var paper = document.getElementById("paper")
var paperimg = document.getElementById("paperimg")
var rock = document.getElementById("rock")
var rockimg = document.getElementById("rockimg")
var scissors = document.getElementById("scissors")
var scissorsimg = document.getElementById("scissorsimg")
let score1 = document.getElementById("score1")
var score2 = document.getElementById("score2")
var user = document.getElementById("user")
var comp = document.getElementById("comp")
var phand = document.getElementById("hand")
var cHand = document.getElementById("chand")
var winner  = document.getElementById("winner")
var pAgain = document.getElementById("playagain")
let uimages = document.getElementById("user-images")
let score_1 = 0
let score_2 = 0
let compOutput

paper.addEventListener("click",paperhand)
rock.addEventListener('click',rockHand)
scissors.addEventListener("click",scissorsHand)
pAgain.addEventListener("click",redirect)
function paperhand(){
     phand.setAttribute("src","./assets/paper-hand.png")
     computerOutput()
     if (compOutput == 1){
        score_1++;
        score1.textContent = score_1
     }
     else if (compOutput == 3) {
        score_2++;
        score2.textContent = score_2
     }
     win()
}

function rockHand(){
    phand.setAttribute("src","./assets/rock-hand.png")
    computerOutput()
    if (compOutput == 3){
        score_1++
        score1.textContent = score_1
    }
    else if(compOutput==2){
        score_2++
        score2.textContent = score_2
    }
    win()
}

function scissorsHand(){
    phand.setAttribute("src","./assets/scissors-hand.png")
    computerOutput()
    if (compOutput==2){
        score_1++;
        score1.textContent = score_1
    }
    else if(compOutput==1){
        score_2++;
        score2.textContent = score_2
    }
    win()
}

function computerOutput(){
    compOutput = Math.ceil(Math.random()*3)
    switch(compOutput){
        case 1:
          cHand.setAttribute("src","./assets/rock-hand.png")
            break;
            
            case 2:
          cHand.setAttribute("src","./assets/paper-hand.png")
            break;
            
            case 3:
          cHand.setAttribute("src","./assets/scissors-hand.png")
            break;
            
    }
  }

  function win(){
    if (score_1 == 5){
        winner.textContent = "You Won The Game!!"
        playAgain()
        uimages.style.display = "none"
    }
    else if(score_2 == 5){
        winner.textContent = "You Lost"
        playAgain()
        uimages.style.display = "none"
    }
    
  }

  function playAgain(){
    pAgain.style.backgroundColor = "rgb(247,187,61)"
    pAgain.style.color = "white"
    pAgain.textContent = "Play Again"
    pAgain.style.fontSize = "25px"
    pAgain.style.borderRadius = "7px"
    pAgain.style.width = "150px"
    pAgain.style.height = "40px"
    pAgain.style.border = "none"
    pAgain.style.marginBottom = "20px"
  }

  function redirect(){
    window.location.href = "./2ndpage.html"
  }
