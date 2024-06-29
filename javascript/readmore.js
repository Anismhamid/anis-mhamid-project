function toggleVisibility() {
    let moreText = document.getElementsByClassName("remaining-content")[0];
    let buttonText = document.getElementById("read-more");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        buttonText.innerHTML = "פחות";
    } else {
        moreText.style.display = "none";
        buttonText.innerHTML = "הצג עוד";
    }
}
