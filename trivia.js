//	Student Name: Plamedie Ngalula
//	File Name: trivia.js
//	Date: 10.13.2024 

// Questions and Answers arrays (all answers in lowercase)
const questions = [
    "What is the capital of France?",
    "What is 2 + 2 in words?",
    "What color is the sky on a clear day?"
];
const answers = [
    "paris",
    "four",
    "blue"
];

// Quote of the Day Array
const quotes = [
    "Keep going, you’re doing great!",
    "Believe in yourself!",
    "Every day is a new beginning.",
    "Make today your best day.",
    "Success is the result of preparation."
];

// Initialize variables
let score = 0;
let currentQuestion = 0;

// Get Current Date and Time
function displayDate() {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = daysOfWeek[today.getDay()];
    const month = monthsOfYear[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = "am";

    if (hours > 12) {
        hours -= 12;
        ampm = "pm";
    } else if (hours === 12) {
        ampm = "pm";
    } else if (hours === 0) {
        hours = 12;
    }

    const formattedDate = `Today is ${day}, ${month} ${date}, ${year}. It is ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}.`;
    document.getElementById("date").innerText = formattedDate;
}

// Create Personalized Greeting
function personalizedGreeting() {
    const name = prompt("What is your name?");
    const greeting = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    let timeGreeting = "";

    // Switch statement for greeting
    switch (true) {
        case (currentHour < 12):
            timeGreeting = "Good Morning";
            break;
        case (currentHour >= 12 && currentHour < 18):
            timeGreeting = "Good Afternoon";
            break;
        case (currentHour >= 18):
            timeGreeting = "Good Evening";
            break;
    }

    const properName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    greeting.innerText = `${timeGreeting}, ${properName}! Welcome to the Trivia Game!`;
}

// Validate and Process Email
function getEmail() {
    let email = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    while (!emailPattern.test(email)) {
        email = prompt("Please enter a valid email address:");
        if (!emailPattern.test(email)) {
            alert("Invalid email format. Please try again.");
        }
    }

    // Split email into username and domain
    const [username, domain] = email.split("@");
    alert(`Username: ${username.toUpperCase()} \nDomain: ${domain}`);
}

// Display Quote of the Day
function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `Quote of the day: "${quotes[randomIndex]}"`;
}

// Trivia Quiz
function triviaQuiz() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const scoreElement = document.getElementById("score");
    const percentageElement = document.getElementById("percentage");

    // Display current question
    questionElement.innerText = questions[currentQuestion];

    document.getElementById("submit").addEventListener("click", function() {
        const userAnswer = answerElement.value.toLowerCase();

        // Check if the answer is correct
        if (userAnswer === answers[currentQuestion]) {
            score++;
        }

        currentQuestion++;

        // Move to the next question or end the quiz
        if (currentQuestion < questions.length) {
            questionElement.innerText = questions[currentQuestion];
            answerElement.value = "";
        } else {
            questionElement.innerText = "Quiz complete!";
            document.getElementById("submit").disabled = true;

            // Display final score and percentage
            scoreElement.innerText = score;
            const percentage = (score / questions.length) * 100;
            percentageElement.innerText = `${percentage.toFixed(2)}%`;
        }
    });
}

// Call all functions before the quiz
displayDate();
personalizedGreeting();
getEmail();
displayQuote();
triviaQuiz();
