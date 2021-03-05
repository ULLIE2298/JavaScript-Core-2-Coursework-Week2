let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");
let jumbotron = document.querySelector(".jumbotron");
let bikeBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

// Part 1

blueBtn.addEventListener("click", turnBlue);
function turnBlue (){
    jumbotron.style.backgroundColor = "#588fbd";
    bikeBtn.style.backgroundColor = "#ffa500";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

orangeBtn.addEventListener("click", turnOrange);
function turnOrange (){
    jumbotron.style.backgroundColor = "#f0ad4e";
    bikeBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#31b0d5";
    volunteerBtn.style.color = "white";
}

greenBtn.addEventListener("click", turnGreen);
function turnGreen (){
    jumbotron.style.backgroundColor = "#87ca8a";
    bikeBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "#8c9c08";
    volunteerBtn.style.color = "white";
}

// Part 2

let submitBtn = document.querySelector("form button");;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let textSpaces = document.querySelectorAll(".form-control");
  let wordValidator = true;

  if(!textSpaces[0].value.includes("@") || textSpaces[0].value.length === 0){
    textSpaces[0].style.backgroundColor = "#E75A76";
    wordValidator = false;
  } else {
    textSpaces[0].style.backgroundColor = "transparent";
  };

  for(i = 1; i < textSpaces.length; i++) {
    if(textSpaces[i].value.length === 0){
    textSpaces[i].style.backgroundColor = "#E75A76";
    wordValidator = false;

    } else {
    textSpaces[i].style.backgroundColor = "transparent";
    }
  };

  if(wordValidator) {
    textSpaces.forEach((field) => field.value = " ")

    alert("Thank you, we will email you shortly to confirm your email.");
  };
})
