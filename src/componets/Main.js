import React from 'react'

function Main() {
    document.onkeydown=function(e){
        console.log("key code is:",e.keyCode)
        if(e.keyCode===38){
            let dino=document.querySelector(".dino");
            dino.classList.add("animateDino");
            setTimeout(() => {
                dino.classList.remove('animateDino');
            }, 700);
        }
        if(e.keyCode===39){
            let dino=document.querySelector(".dino");
            let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=dx+112+'px';
        }
        if(e.keyCode===37){
            let dino=document.querySelector(".dino");
            let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=(dx-112)+'px';
        }
    }
    let score=0;
    let cross=true;
    setInterval(() => {
        let dino=document.querySelector(".dino");
        let gameover=document.querySelector(".gameover");
        console.log(gameover)
        let obs=document.querySelector(".obstacle");
        let dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        let dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
        let ox=parseInt(window.getComputedStyle(obs,null).getPropertyValue('left'));
        let oy=parseInt(window.getComputedStyle(obs,null).getPropertyValue('top'));
        let oofsetx=Math.abs(dx-ox);
        let oofsety=Math.abs(dy-oy);
        console.log(oofsetx)
        if(oofsetx<94&&oofsety<52){
            gameover.style.visibility='visible';
            obs.classList.remove('obstacleani')
        }
        else if(oofsetx<145 && cross){
            score+=1
            updatescore(score)
            cross=false;
            setTimeout(() => {
                cross=true;
            }, 1000);
            setTimeout(() => {
                cross=true;
                let anidur=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
                let newdur=anidur-0.1;
                obs.style.animationDuration=newdur+'s';
            }, 500);
        }
        function updatescore(score){
            let s=document.getElementById("scorecont");
            s.innerHTML="Your Score:" +(score);
        }
    }, 100);
  return (
    <div className='gamecontainer'>
      <div className="gameover">Game over</div>
      <div className="dino"></div>
      <div id="scorecont">Your Score:0 </div>
      <div className="obstacle obstacleani"></div>
    </div>
  )
}

export default Main
