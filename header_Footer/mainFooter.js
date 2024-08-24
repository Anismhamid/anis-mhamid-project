
function mainFooter() {
	document.getElementById("footer").innerHTML += `
    <footer class="bg-dark">
        <div class="footer-section">

            <h3>קישורים מהירים</h3>
            <ul>
                <li><a href="#about">מי אנחנו</a></li>
                <li><a href="#projects">הפרויקטים שלנו</a></li>
                <li><a href="#contact">צור קשר</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>עקוב אחרינו</h3>
            <ul class="social-links">
                <li><a href="tel:+972538346915">
                        <img src="./img/contact-us/call.png" alt="call us">
                    </a>
                </li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./img/contact-us/instagram-logo.png" alt="instagram">
                    </a>
                </li>
                <li><a href="https://www.linkedin.com/in/anis-mhamid-2303a3b6/" target="_blank"
                        rel="noopener noreferrer">
                        <img src="./img/contact-us/linkedin-big-logo.png" alt="linkedin">
                    </a>
                </li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./img/contact-us/facebook-app-symbol.png" alt="facebook">
                    </a>
                </li>
            </ul>
        </div>
        <div class="copy" dir="ltr">This website has been created by, Anis Mahamid. &copy;</div>
    </footer>
    `;
}
mainFooter();
