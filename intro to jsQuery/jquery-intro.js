/* 
Name: Plamedie Ngalula
Date: 10.26.2024
*/


$(document).ready(function() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const specials = [
        "Winter Special! Warm up with indoor plants.",
        "Winter Deal! Buy one, get one free on all roses.",
        "Spring Spectacular! Get 10% off all perennials.",
        "Spring Sale! Azaleas at a discount.",
        "Spring Savings! Tulips for less.",
        "Summer Splash! Brighten up with sunflowers.",
        "Summer Deal! Discount on daisies.",
        "Summer Surprise! Roses for a special price.",
        "Fall Harvest! Special on mums and pumpkins.",
        "Fall Colors! Autumn specials on pansies.",
        "Fall Deal! Discounted shrubs and trees.",
        "Holiday Special! Festive wreaths and poinsettias."
    ];
    const tips = [
        "<p>Winter is perfect for indoor plants and planning your spring garden!</p>",
        "<p>Spring brings new growth; try planting early bloomers like tulips!</p>",
        "<p>Summer heat requires extra watering, so keep those plants hydrated!</p>",
        "<p>Fall is a great time for planting hardy vegetables and flowers.</p>"
    ];

    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const monthName = months[currentMonth];
    
    // Display greeting if December
    if (currentMonth === 11) {
        $("#slogan").after("<h3>Happy Holidays!</h3>");
    }
    
    // Update the month in #month and year in #copy
    $("#month").text(`Tips for ${monthName}`);
    $("#copy").append(` ${currentYear}`);

    // Update the specials content based on the month
    $("#specials").html(`<h3>Specials</h3><p>${specials[currentMonth]}</p>`);

    // Switch statement for season
    let season, backgroundImage, seasonColor, seasonIndex;

    switch (currentMonth) {
        case 11:
        case 0:
        case 1:
            season = "Winter";
            backgroundImage = "winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            break;
        case 2:
        case 3:
        case 4:
            season = "Spring";
            backgroundImage = "springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;
        case 5:
        case 6:
        case 7:
            season = "Summer";
            backgroundImage = "summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            break;
        case 8:
        case 9:
        case 10:
            season = "Fall";
            backgroundImage = "fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }

    // Change the page background image
    $("body").css("background-image", `url(${backgroundImage})`);

    // Change color of headings and strong elements
    $("h1, h2, h3, strong").css("color", seasonColor);

    // Update #seasontips content
    $("#seasontips").html(tips[seasonIndex]);

    // Add season class to #specials
    $("#specials").addClass(season);
});
