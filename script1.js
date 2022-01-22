console.log("welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let gameover=new Audio("gameover.mp3");
let audio_turn=new Audio("ting.mp3");
let turn ="X";
let gamefinish=false;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
function change_turn(){
    return turn==="X"?"O":"X";
}
function win()
{
   // console.log("coming or not");
    let boxtexts=document.getElementsByClassName("boxtext");
    var winner=[
        [0,1,2,6.5,6.5,0],
        [3,4,5,6.5,19.5,0],
        [6,7,8,6.5,32.5,0],
        [0,3,6,-6.5,19,90],
        [1,4,7,6.5,19,90],
        [2,5,8,19.5,19,90],
        [0,4,8,6,19,45],
        [2,4,6,7,19,-45]
    ];
  winner.forEach(function(e){
     // console.log(boxtexts[e[0]].innerText);
     music.play();
       if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!="")
       {
        // console.log("winner checker");   
        gamefinish=true;
        music.pause();
        gameover.play();
        document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" WON";
       // document.querySelector(".line").style.transform=translate(e[3]+"vh",e[4]+"vw") ;
    //    document.querySelector(".line").style.width="26vw";
    //    document.querySelector(".line").style.transform=translate("7vw","44vh") ;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "26vw";

      }
   })
    
}
let boxes=document.getElementsByClassName("box");
// console.log(boxes);
// console.log("start");
Array.from(boxes).forEach(function(box){
    // console.log("start1");
    box.addEventListener("click",function(){
      //  console.log(turn);
       let element= box.querySelector(".boxtext");
       if(element.innerText==="")
       {
       element.innerText=turn;
       turn=change_turn();
       audio_turn.play();
        win();
       if(!gamefinish)
       {
          document.querySelector(".info").innerText="Turn for "+turn;
       }
    }
    });
});


// add event listener to reset button

reset.addEventListener("click",function(){
    let boxes1=document.getElementsByClassName("box");
    music.play();
    Array.from(boxes1).forEach(function(box){
           let element= box.querySelector(".boxtext");
           element.innerText="";
           turn="X";
            document.querySelector(".info").innerText="Turn for "+turn;
            gamefinish=false;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0";
            document.querySelector(".line").style.width = "0";
        });
});


