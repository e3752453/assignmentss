/*
Name: Plamedie Ngalula
Date: 11.10.2024
*/
$(document).ready(function () {
    // Hide the newsSignup form when the page loads
    $('#newsSignup').hide();

    // Click event for the signup link
    $('#signuplink').click(function (event) {
        event.preventDefault(); // Cancel the link's default action

        // Slide toggle the form
        $('#newsSignup').slideToggle();

        // Toggle the plus/minus sign
        const openclose = $('#openclose');
        openclose.text(openclose.text() === '+' ? '-' : '+');
    });

    // Hover effect on slogan
    $('#slogan').hover(
        function () {
            $(this).fadeOut('normal', 'linear', function () {
                $(this).text('Hand Picked Just for You').fadeIn('slow', 'swing');
            });
        },
        function () {
            $(this).fadeOut('fast', 'swing', function () {
                $(this).text('The Power of Flowers').fadeIn('slow', 'linear');
            });
        }
    );

    // Animate the rose to move in from the right and fade in
    $('#rose').animate({
        right: '100px',
        opacity: 1
    }, 2000, 'swing');

    // Submit event for the form
    $('#newsSignup').submit(function (event) {
        event.preventDefault(); // Prevent form submission

        alert('Thank you for registering'); // Display alert

        // Hide the form and fade out the signup link
        $(this).hide();
        $('#signuplink').fadeTo('slow', 0.3);
    });
});
