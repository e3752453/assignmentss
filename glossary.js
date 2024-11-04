/*
Name: Plamedie Ngalula
Date: 11.03.2024
*/
$(document).ready(function() {
    // Show botanical name on hover over flower name
    $(".flower").hover(
      function() {
        $(this).find(".botanic").show();
      },
      function() {
        $(this).find(".botanic").hide();
      }
    );
  
    // Change color of headings on mouseover and mouseout
    $("h1, h2").hover(
      function() {
        $(this).css("color", "#FF5733"); // Hover color
      },
      function() {
        $(this).css("color", ""); // Revert to original color
      }
    );
  });
  
  


  

  