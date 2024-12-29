let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBTn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//platerX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){//player O turn print O and then set to false for next turn
            box.innerText="O";
            box.classList.add("o-mark");
            turnO=false;
            
        }else{//else player X turn print X and set true for player O
            box.innerText="X";
            box.classList.add("x-mark");
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

const showWinner=(winner)=>{
    msg.innerText=`Congraulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}

const checkWinner=()=>{

    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                
                showWinner(pos1Val);

            }
        }
    
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
newGameBTn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
