

function header(){
    document.getElementById("header").innerHTML += `
    
    <nav class="navbar navo navbar-expand-lg shadow-lg p-3 mb-5 rounded-bottom">
            <div class="profile-picture-box">
                <a class="navbar-brand" href="./index.html">
                    <img class=" bg-danger img-fluid rounded" src="./img/application-brackets-outline.svg" alt="anis mhamid profile picture">
                </a>
            </div>
            <button class="navbar-toggler bg-light g-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" dir="ltr" id="navbarSupportedContent">
                <ul class="navbar-nav me-3 mb-2 mb-lg-0 h6">
                    <li class="nav-item">
                        <a class="nav-link links-settings me-auto" aria-current="page" href="#main-section">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="#about" >About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="#projects">HTML - CSS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="#js">javaScript - Bootstrap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="#pythonProjects">Pyton</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link links-settings" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
}
header()