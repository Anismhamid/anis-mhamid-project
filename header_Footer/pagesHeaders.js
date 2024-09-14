function header() {
	document.getElementById('header').innerHTML += `
    <nav class="navbar navo navbar-expand-lg bg-black">
            <div class="profile-picture-box">
                <a class="navbar-brand" href="../index.html">
                    <img  class=" bg-body img-fluid" src="../img/application-brackets-outline.svg" alt="anis mhamid profile picture">
                </a>
            </div>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" dir="ltr" id="navbarSupportedContent">
                <ul class="navbar-nav me-3 mb-2 mb-lg-0 h6">
                    <li class="nav-item">
                        <a class="nav-link links-settings me-auto" aria-current="page" href="../index.html#main-section">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="../index.html#about" alt>About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="../index.html#projects">HTML - CSS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="../index.html#js">javaScript - Bootstrap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="../index.html#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
}
header();
