let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, winner is ${winner} <br> Scroll down to review your game`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener('click', () => {
    if(turn0){
        box.innerText = "O";
        box.style.color = '#FF007F';
        turn0 = false;
        box.disabled = true;
    }else{
        box.innerText = "X";
        box.style.color = 'Darkblue';
        turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if(count === 9 && !isWinner){
        gameDraw();
    }
   })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
      for(let pattern of winPatterns){
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
                return true;
            }
        }
  }}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener('click', resetGame);



