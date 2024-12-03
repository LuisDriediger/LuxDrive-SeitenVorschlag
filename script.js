let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}
// Smooth Scroll for Button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
// Form Feedback
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Danke! Ihre Nachricht wurde erfolgreich gesendet.");
});