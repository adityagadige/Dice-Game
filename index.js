document.querySelector(".dice-roll").addEventListener("click",function() {
var randomNumber1= Math.ceil(6*Math.random());
var randomNumber2= Math.ceil(6*Math.random());
document.querySelector(".img1").setAttribute("src",'images/dice'+randomNumber1+'.png');
document.querySelector(".img2").setAttribute("src",'images/dice'+randomNumber2+'.png');
if(randomNumber1>randomNumber2)
document.querySelector(".container h1").innerText="Player 1 Wins";
else if(randomNumber2>randomNumber1)
document.querySelector(".container h1").innerText="Player 2 Wins";
else
document.querySelector(".container h1").innerText="Draw!";
});
document.querySelector(".reset").addEventListener("click",function(){
  location.reload(true);
});
