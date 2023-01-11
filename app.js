const colors = ["green", "red", "blue", "white", "black", "pink", "orange", "purple",
 "teal", "cyan", "beige", "aqua", "brown", "grey", "maroon"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number for random color
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function getRandomNumber() {
    return Math.floor(Math.random() *  colors.length);
}