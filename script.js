let SecretNumber = Math.floor(Math.random() * 100) + 1;
console.log(SecretNumber);
Attempts = 0;

function guessNumber() {
    let UserInput = document.getElementById("GuessInput").value;

    let Guess = Number(UserInput);

    Attempts++ + Guess;

    document.getElementById("Attempts").textContent = `Attempts: ${Attempts}`
    if (Guess > SecretNumber) {
        document.getElementById("Answer").textContent = "Too high!";

    }
    else if (Guess < SecretNumber) {
        document.getElementById("Answer").textContent = "Too low!";
    }
    else if (Guess === SecretNumber) {
        document.getElementById("Answer").textContent = 'Correct!';
    }
}

function RestartGame() {
    SecretNumber = Math.floor(Math.random() * 100) + 1;
    Attempts = 0;
    document.getElementById("GuessInput").value = " ";
    document.getElementById("Attempts").textContent = `Attempts: ${Attempts}`
}
