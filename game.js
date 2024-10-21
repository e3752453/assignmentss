//	Student Name: Plamedie Ngalula
//	File Name: games.js
//	Date: 10.20.2024 

// Global variables
let currentQuestion = 0;
let score = 0;

// Multi-dimensional array with 3 questions, each containing a correct answer index and 3 possible answers
const questions = [
    ["What is the capital of France?", 0, "Paris", "Berlin", "Madrid"],
    ["What is 2 + 2 in words?", 1, "Three", "Four", "Five"],
    ["What color is the sky on a clear day?", 2, "Green", "Red", "Blue"]
];

// Function to dynamically load the Play Game button
function loadStartButton() {
    const promptDiv = document.getElementById("prompt");
    promptDiv.innerHTML = `<button onClick="playGame()">Play Game</button>`;
}

// Function to initialize the game
function playGame() {
    // Ensure questions are left to ask
    if (currentQuestion < questions.length) {
        // Get the current question and answers
        const questionData = questions[currentQuestion];
        const questionText = questionData[0];
        const correctAnswerIndex = questionData[1];

        // Display the question
        const questionElement = document.getElementById("question");
        questionElement.innerText = questionText;

        // Display the answers as clickable links
        const answersElement = document.getElementById("answers");
        answersElement.innerHTML = ''; // Clear previous answers

        for (let i = 2; i < questionData.length; i++) {
            const answerItem = document.createElement("li");
            answerItem.innerHTML = `<a href="#" onClick="checkAnswer(${i - 2}, ${correctAnswerIndex})">${questionData[i]}</a>`;
            answersElement.appendChild(answerItem);
        }

        // Increment the question counter
        currentQuestion++;
    } else {
        // End the game and provide a restart button
        endGame();
    }
}

// Function to check the answer
function checkAnswer(selectedIndex, correctIndex) {
    const resultElement = document.getElementById("result");

    // Check if the selected answer is correct
    if (selectedIndex === correctIndex) {
        resultElement.innerText = "Correct!";
        score++;
    } else {
        resultElement.innerText = "Incorrect!";
    }

    // After checking, prompt to continue to the next question
    setTimeout(() => {
        resultElement.innerText = ""; // Clear result
        playGame();
    }, 1000);
}

// Function to end the game and prompt a restart
function endGame() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const resultElement = document.getElementById("result");

    questionElement.innerText = `Game Over! Your score: ${score}/${questions.length}`;
    answersElement.innerHTML = ''; // Clear the answers list
    resultElement.innerHTML = `<button onClick="location.reload()">Restart Game</button>`;
}

// Load the start button when the page is ready
window.onload = loadStartButton;
