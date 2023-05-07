let game=document.querySelector(".game")
let userResult=document.querySelector(".user_visual_res");
let cpuResult=document.querySelector(".computer_visual_res");
let result=document.querySelector(".final_result");
let optionImg=document.querySelectorAll(".optn");

let userScore=0;
let cpuScore=0;

optionImg.forEach((x,i)=>{
   x.addEventListener("click",e=>{
    x.classList.add("active");
    userResult.innerHTML=cpuResult.innerHTML="&#9994;";
    result.textContent="Wait...";
    optionImg.forEach((y,j)=>{
        (i !== j) && y.classList.remove("active");
    });
    game.classList.add("start");
    let time = setTimeout(() => {
        game.classList.remove("start");
        userResult.innerHTML=e.target.innerHTML;
        let rN = Math.floor(Math.random() * 3); 
        let cpuImages=["&#9994;","&#9995;","&#9996;"]
        cpuResult.innerHTML=cpuImages[rN];   
        let cpuValue = ["S", "P", "C"];
        let userValue = ["S", "P", "C"];
        let outcomes = {
            SS: "Draw",
            SP: "Cpu",
            SC: "User",
            PP: "Draw",
            PS: "User",
            PC: "Cpu",
            CC: "Draw",
            CS: "Cpu",
            CP: "User",
        };
        let outComeValue = outcomes[userValue[i] + cpuValue[rN]];
        result.textContent = (userValue === cpuValue) ? "Match Draw" : `${outComeValue} Won !!`;
        if(outComeValue=="User")
        {
           userScore++;
           document.getElementById("user_score").innerHTML= userScore;
           document.getElementsByClassName("")
        }
        else if(outComeValue=="Cpu")
        {
            cpuScore++;
           document.getElementById("cpu_score").innerHTML= cpuScore;
        }
        }, 2500);
   });
});
