/* 
Name: Plamedie Ngalula
Date: 09.22.2024
*/
 // Array of quotes
const quotes = [
    "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.– Albert Einstein",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats.– Maya Angelou ",
    "It always seems impossible until it’s done – Nelson Mandela",
    "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.– Marie Curie ",
    "The unexamined life is not worth living.– Socrates ."
];

// Array of website URLs
let websites = [
    "https://www.google.com",
    "https://www.wikipedia.org",
    "https://www.github.com"
];

// Prompt the user for a number
const userNumber = prompt("Enter a number to see the quote of the day:");
const index = userNumber % 5; // Calculate modulus of the number by 5
document.getElementById('quote').innerText = quotes[index];

// Display website URLs as links
function displayWebsites() {
    const websiteContainer = document.getElementById('websites');
    websiteContainer.innerHTML = ''; // Clear the container
    websites.forEach(url => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.innerText = url;
        const br = document.createElement('br');
        websiteContainer.appendChild(link);
        websiteContainer.appendChild(br);
    });
}

// Add favorite website entered by user
function addWebsite() {
    const favoriteWebsite = document.getElementById('favoriteWebsite').value;
    if (favoriteWebsite) {
        websites.push(favoriteWebsite); // Add user's favorite website to array
        websites.shift(); // Remove the first website from array
        displayWebsites(); // Refresh the list of websites
    } else {
        alert('Please enter a valid URL.');
    }
}

// Initially display the websites
displayWebsites();
