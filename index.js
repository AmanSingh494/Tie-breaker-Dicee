var randomNumber1 =Math.floor(((Math.random())*6) +1);
var randomNumber2 =Math.floor(((Math.random())*6) +1);
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource1 = "images/" + randomImage1;
var randomImageSource2 = "images/" + randomImage2;
console.log(randomNumber1);
console.log(randomNumber2);
//alternate way
// if(randomNumber1===1){
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png" )
// }
// if(randomNumber1===2){
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png" )
// }
// if(randomNumber1===3){
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png" )
// }
// if(randomNumber1===4){
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png" )
// }
// if(randomNumber1===5){
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png" )
// }
// if(randomNumber2===1){
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png" )
// }
// if(randomNumber2===2){
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png" )
// }
// if(randomNumber2===3){
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png" )
// }
// if(randomNumber2===4){
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png" )
// }
// if(randomNumber2===5){
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png" )
// }
document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 Wins"
    document.querySelector(".container h1").classList.toggle("small-font");
}
if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins"
    document.querySelector(".container h1").classList.toggle("small-font");
}
if(randomNumber1===randomNumber2){
    document.querySelector(".container h1").innerHTML = "Oh fck, it's a Tie"
    document.querySelector(".container h1").classList.toggle("small-font");
}
