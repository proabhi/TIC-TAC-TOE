var some=document.getElementsByClassName("sq");
var info=document.getElementById("message");
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");
var s5=document.getElementById("s5");
var s6=document.getElementById("s6");
var s7=document.getElementById("s7");
var s8=document.getElementById("s8");
var s9=document.getElementById("s9");
var p1button=document.getElementById("first");
var p2button=document.getElementById("second");
var resetbutton=document.getElementById("resetprimary");
var p1display=document.getElementById("fir");
var p2display=document.getElementById("sec");
var numinput=document.querySelector("input");
var range=document.getElementById("reach");
var userinput=document.getElementById("foam");
var clearboard=document.getElementById("reset_game");
var p1score=0;
var p2score=0;
var gameover=false;
var sum;
var chance;
var total=0;
var game_end=false;
realtask();
function realtask(){
  for (var i =0; i < 9; i++) {
  some[i].addEventListener("click",function dotask () {
      if ((this.innerHTML=="")&&(game_end==false)){
        if(chance=="X"){
          this.innerHTML="X";
          total++;
          decide("X");
          if(decide("X")!=true){
            info.innerHTML="it's 0 turn";
          }
          chance="0";
          tied();
        }
        else if(chance=="0"){
          this.innerHTML="0";
          total++;
          decide("0");
          if(decide("0")!=true){
            info.innerHTML="it's X turn";
          }
          chance="X";
          tied();
        }
      }
  });
  }
}
function tied(){
  if ((total=="9")&&(game_end==false)) {
    info.innerHTML="Match tied!! play again";
    info.style.color="red";
  }
}
clearboard.addEventListener("click", function() {
  for (var i = 0; i < 9; i++){
        some[i].innerHTML="";
        some[i].classList.remove("new");
  }
  info.style.color="white";
  game_end=false;
  total=0;
  start();
  realtask();
});
 function start(){
   if (Math.random()<0.5) {
     info.innerHTML="X get the chance to start";
     chance="X";
   }
   else {
     info.innerHTML="0 get the chance to start";
     chance="0";
   }
 }
 function decide(answer){
  if(judge(s1,s2,s3,answer) ||
     judge(s1,s4,s7,answer) ||
     judge(s7,s8,s9,answer) ||
     judge(s3,s6,s9,answer) ||
     judge(s1,s5,s9,answer) ||
     judge(s3,s5,s7,answer) ||
     judge(s2,s5,s8,answer) ||
     judge(s4,s5,s6,answer)==true){
    info.innerHTML="CONGRATULATION !!  " +answer +" you won the game" ;
    info.style.color="red";
    game_end=true;
    return true;
  }
 }
 function judge(a,b,c,val){
  if((a.innerHTML==val)&&(b.innerHTML==val)&&(c.innerHTML==val)){
    a.classList.add("new");
    b.classList.add("new");
    c.classList.add("new");
    return true;
  }
 }

//creating an eventlistener for the given input behaviour
user();
function user(){
  numinput.addEventListener("change",function(){
    sum=numinput.value;
    range.textContent=sum;
    range.classList.add("xum");
  });
}

butt(p1button,p1display,p1score);
butt(p2button,p2display,p2score);
function butt(button_name,button_disp,button_score){
  button_name.addEventListener("click",function(){
    if(sum>0){
      if(!gameover){
        button_score++;
        button_disp.textContent=button_score;
        if(button_score==sum){
          button_disp.classList.add("xum");
          gameover=true;
        }
      }
    }
  });
}
//creating an eventlistener for the "player 1"  button behaviour
// p1button.addEventListener("click",function(){
//   if(sum>0){
//     if(!gameover){
//       p1score++;
//       p1display.textContent=p1score;
//       if(p1score==sum){
//         p1display.classList.add("xum");
//         gameover=true;
//       }
//     }
//   }
// });
// //creating an eventlistener for the "player 2" button behaviour
// p2button.addEventListener("click",function(){
//   if(sum>0){
//     if(!gameover){
//       p2score++;
//       p2display.textContent=p2score;
//       if(p2score==sum){
//         p2display.classList.add("xum");
//         gameover=true;
//       }
//     }
//   }
// });
//creating an eventlistener for the "reset" button behaviour
resetbutton.addEventListener("click",function(){
  user();
  gameover=false;
  p1display.classList.remove("xum");
  p2display.classList.remove("xum");
  range.textContent=0;
  range.classList.remove("xum");
  p1score=range=p2score=p1display.textContent=p2display.textContent=0;
  userinput.value="";
  butt(p1button,p1display,p1score);
  butt(p2button,p2display,p2score);

});
