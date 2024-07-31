let images = [
    '../img/wmImages/1.png',
    '../img/wmImages/2.png',
    '../img/wmImages/3.png',
    '../img/wmImages/4.png',
    '../img/wmImages/5.png',
    '../img/wmImages/6.png',
    '../img/wmImages/7.png',
    '../img/wmImages/8.png',
    '../img/wmImages/9.png',
    '../img/wmImages/10.png',
    '../img/wmImages/11.png',
    '../img/wmImages/12.png',
    '../img/wmImages/13.png',
    '../img/wmImages/14.png',
    '../img/wmImages/15.png',
    '../img/wmImages/16.png',
    '../img/wmImages/17.png',
    '../img/wmImages/18.png',
];
let mainImage = document.getElementById('main-pic');
let imageIndex = 0;

function back() {
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = images.length - 1;
    }
    updateGallery();
}

function next() {
    if (imageIndex < images.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    updateGallery();
}

function updateGallery() {
    mainImage.src = images[imageIndex];
}