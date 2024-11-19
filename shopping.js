/*
Name: Plamedie Ngalula
Date: 11.17.2024
*/

// Initialize the shopping cart count
let itemCount = 0;

// HTML for the delete button
const deleteButtonHTML = "<span class='del'>Remove</span>";

// Add a click event to the Add to Cart buttons
document.querySelectorAll('.add').forEach(button => {
    button.addEventListener('click', function () {
        // Increment the shopping cart count
        itemCount++;

        // Hide the #empty list item if the cart is no longer empty
        if (itemCount > 0) {
            document.getElementById('empty').style.display = 'none';
        }

        // Get the name and id attributes of the clicked element
        const itemName = this.getAttribute('name');
        const itemID = this.getAttribute('id');

        // Create the list item for the cart
        const cartItemHTML = `
            <li class='cartItem' name='${itemID}'>
                ${itemName} ${deleteButtonHTML}
            </li>
        `;

        // Append the item to the #cart ul
        document.querySelector('#cart ul').insertAdjacentHTML('beforeend', cartItemHTML);

        // Hide the Add to Cart button for the clicked item
        this.style.display = 'none';
    });
});

// Delegate a click event for remove buttons in the cart
document.querySelector('#cart ul').addEventListener('click', function (e) {
    if (e.target.classList.contains('del')) {
        // Remove the parent li element
        const parentLI = e.target.closest('li');
        parentLI.remove();

        // Deduct 1 from the cart count
        itemCount--;

        // Show the #empty list item if the cart is empty
        if (itemCount === 0) {
            document.getElementById('empty').style.display = 'block';
        }

        // Show the Add to Cart button for the removed item
        const itemID = parentLI.getAttribute('name');
        document.getElementById(itemID).style.display = 'inline-block';
    }
});

// Add click event to rating stars
document.querySelectorAll('.rating img').forEach(star => {
    star.addEventListener('click', function () {
        // Change all siblings to staroff.gif
        this.parentNode.querySelectorAll('img').forEach(sibling => {
            sibling.src = 'staroff.gif';
        });

        // Change the clicked star and all previous stars to staron.gif
        let currentStar = this;
        while (currentStar) {
            currentStar.src = 'staron.gif';
            currentStar = currentStar.previousElementSibling;
        }
    });
});
