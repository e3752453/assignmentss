/* 
Name: Plamedie Ngalula
Date: 09.14.2024
*/

// JavaScript to display a prompt box and welcome message
window.onload = function() {
    // Prompt for visitor's name
    var visitorName = prompt("Welcome! What is your name?");
    
    // Create an alert with a personalized welcome message
    if (visitorName) {
        alert("Hello " + visitorName + "! Welcome to my webpage.");
        
        // Update the welcome message on the page
        document.getElementById("welcome-message").innerText = "Welcome, " + visitorName + "!";
    } else {
        alert("Welcome to my webpage!");
    }
};
