// page-color-updater.js
document.addEventListener("DOMContentLoaded", function () {
    // Declare and initialize constants for input slider elements and the page body
    const redRange = document.getElementById("red");
    const greenRange = document.getElementById("green");
    const blueRange = document.getElementById("blue");
    const pageBody = document.body;

    // Build event handlers for sliders
    redRange.addEventListener("input", updatePageColor);
    greenRange.addEventListener("input", updatePageColor);
    blueRange.addEventListener("input", updatePageColor);

    // Build function to change background color based on slider values
    function updatePageColor() {
        // Get values from sliders
        const redValue = redRange.value;
        const greenValue = greenRange.value;
        const blueValue = blueRange.value;

        // Change background color based on slider values
        pageBody.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }
});

