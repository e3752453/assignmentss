//	Student Name: Plamedie Ngalula
//	File Name: quiz.html
//	Date: 10.06.2024 

// Array of questions
const questions = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "What is the largest ocean on Earth?"
];

// Array of answers (corresponding to questions)
const answers = [
    "Paris",
    "Mars",
    "Pacific"
];

// Track score
let score = 0;

// Loop through the questions
for (let i = 0; i < questions.length; i++) {
    let userAnswer = ""; // Variable to store user input
    let attempts = 0; // Track the number of attempts per question

    // While loop to ensure the user answers the question (max 3 attempts)
    while (attempts < 3) {
        userAnswer = prompt(questions[i]); // Ask the question
        attempts++;

        // Check if the answer is correct
        if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
            alert("Correct!");
            score++; // Add point to the score
            break; // Exit the loop if the answer is correct
        } else {
            alert("Wrong answer. Try again.");
        }

        // If user has had 3 attempts, notify them of the correct answer
        if (attempts === 3) {
            alert(`The correct answer was: ${answers[i]}`);
        }
    }
}

// Display final score on the page
document.getElementById("quiz-result").innerText = `Your total score is: ${score} out of ${questions.length}`;
