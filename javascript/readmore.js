function toggleVisibility() {
    var moreText = document.getElementsByClassName("remaining-content")[0];
    var buttonText = document.getElementsByClassName("button_text")[0];

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        buttonText.innerHTML = "הסתר"; // Change button text when content is revealed
    } else {
        moreText.style.display = "none";
        buttonText.innerHTML = "הצג עוד"; // Change button text when content is hidden
    }
}
