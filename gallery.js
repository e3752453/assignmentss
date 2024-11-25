$(document).ready(function () {
    // Add hover effect to thumbnails
    $("#thumbs img").hover(
        function () {
            // On mouseover: add green border and box shadow
            $(this).css({
                "border": "2px solid darkgreen",
                "box-shadow": "2px 2px 5px rgba(0, 0, 0, 0.5)",
                "cursor": "pointer"
            });
        },
        function () {
            // On mouseout: remove green border and box shadow
            $(this).css({
                "border": "none",
                "box-shadow": "none"
            });
        }
    );

    // Add click event to thumbnails
    $("#thumbs img").click(function () {
        // Update the large image src and alt attributes
        $("#lgPic").attr("src", $(this).attr("src"));
        $("#lgPic").attr("alt", $(this).attr("alt"));

        // Update the caption below the large image
        $("#lgTitle").text($(this).attr("alt"));
    });

    // Add click event to the large image to open in a new window
    $("#lgPic").click(function () {
        window.open($(this).attr("src"), "_blank", "width=800,height=600");
    });
});
