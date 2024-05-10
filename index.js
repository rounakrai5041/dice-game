let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let player1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", player1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let player2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", player2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins by " + (randomNumber1 - randomNumber2) + " points"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins by " + (randomNumber2 - randomNumber1) + " points"
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "its a draw"
}



console.log(randomNumber1)
console.log(randomNumber2)

