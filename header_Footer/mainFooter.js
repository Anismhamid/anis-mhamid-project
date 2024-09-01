function mainFooter() {
    document.getElementById("footer").innerHTML = `
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
                <li>
                    <a href="tel:+972538346915" aria-label="Call us">
                        <img src="./img/contact-us/call.png" alt="Call us">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                        <img src="./img/contact-us/instagram-logo.png" alt="Instagram logo">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anis-mhamid-2303a3b6/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                        <img src="./img/contact-us/linkedin-big-logo.png" alt="LinkedIn logo">
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                        <img src="./img/contact-us/facebook-app-symbol.png" alt="Facebook logo">
                    </a>
                </li>
            </ul>
        </div>
        <div class="copy" dir="ltr">
            This website has been created by Anis Mahamid. &copy; ${
                (new Date().getFullYear())
            }
        </div>
    </footer>
    `
}
mainFooter()
