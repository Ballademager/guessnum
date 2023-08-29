const start = document.querySelector("#start");
const lower = document.querySelector("#lower");
const correct = document.querySelector("#correct");
const higher = document.querySelector("#higher");
const h1 = document.querySelector("h1");

let intHigh = 100;
let intLow = 0;
let count = 0;
let guess;

start.addEventListener("click", function () {
  start.disabled = true;
  intHigh = 100;
  intLow = 0;
  count = 0;
  h1.textContent = "";
  start.removeEventListener("click", theFunction);
  theFunction(intLow, intHigh);
});

function theFunction(min, max) {
  guess = Math.floor((min + max) / 2);
  h1.textContent = "Jeg gætter på " + guess + "!";

  lower.removeEventListener("click", guessLower);
  higher.removeEventListener("click", guessHigher);

  lower.addEventListener("click", guessLower);
  higher.addEventListener("click", guessHigher);
  correct.addEventListener("click", guessedCorrect);
}

function guessLower() {
  intHigh = guess - 1;
  guess = Math.floor((intLow + intHigh) / 2);
  h1.textContent = "Jeg gætter på " + guess + "!";
  if (intLow <= intHigh) {
    count++;
    theFunction(intLow, intHigh);
  } else {
    h1.textContent = "Du har snydt mig!";
  }
}

function guessHigher() {
  intLow = guess + 1;
  guess = Math.floor((intLow + intHigh) / 2);
  h1.textContent = "Jeg gætter på " + guess + "!";
  if (intLow <= intHigh) {
    count++;
    theFunction(intLow, intHigh);
  } else {
    h1.textContent = "Du har snydt mig!";
  }
}

function guessedCorrect() {
  count++;
  h1.textContent = "Jeg vidste det! Det tog mig " + count + " forsøg.";
  start.disabled = false;
}

// const start = document.querySelector("#start");
// const lower = document.querySelector("#lower");
// const correct = document.querySelector("#correct");
// const higher = document.querySelector("#higher");
// const h1 = document.querySelector("h1");

// let intHigh = 100;
// let intLow = 0;
// let count = 0;

// start.addEventListener("click", function () {
//   theFunction(intLow, intHigh);
// });

// function theFunction(min, max) {
//   start.removeEventListener("click", theFunction);
//   console.log("spil igang");
//   let guess = Math.round(min + max / 2);
//   console.log("guess is: ", guess);
//   h1.textContent = "Jeg gætter på " + guess + "!";

//   lower.addEventListener("click", function guessLower() {
//     theFunction(intLow, guess);
//   });
// }

// function guessLower() {

// }
// first try ************************

// start.addEventListener("click", game);

// let guess = 50;
// let lowest = 0;
// let highest = 100;
// let count = 1;
// function game() {
//   start.removeEventListener("click", game);

//   document.querySelector("h1").textContent = "Jeg gætter på " + guess + "!";

//   //   eventlisteneres til højere og lavere
//   lower.addEventListener("click", function () {
//     lowerNum(lowest, guess);
//   });
//   higher.addEventListener("click", function () {
//     lowerNum(guess, highest);
//   });
// }

// function lowerNum(min, max) {
//   lower.removeEventListener("click", function () {
//     lowerNum(lowest, guess);
//   });
//   console.log(count);
//   count++;
//   console.log(count);
//   guess = (min + max) / 2;

//   console.log("guess is: ", guess);
//   document.querySelector("h1").textContent = "Jeg gætter på " + guess + "!";

//   // removeEventlistener?
//   // addEventlistener?
//   lower.addEventListener("click", function () {
//     lowerNum(lowest, guess);
//   });
//   return guess;
// }

// function higherNum(min, max) {
//   guess = (min + max) / 2;
//   // removeEventlistener?

//   // addEventlistener?
// }

// correct.addEventListener("click", done);
// function done() {
//   document.querySelector("h1").textContent = "Jeg gættede det på " + count + " gæt!";
// }
// console.log(getBetterNum(20, 40));
// function getBetterNum(min, max) {
//   return (min + max) / 2;
// }
