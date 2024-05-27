let container = document.querySelector('.animatedBackground');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function (Event) {
    let X = Event.pageX;
    let Y = Event.pageY;

    layer[0].style.transform = "translate(" + X / 100 + 'px, ' + Y / 100 + 'px)'
    layer[1].style.transform = "translate(" + X / 100 * 2 + 'px, ' + Y / 100 * 2 + 'px)'
    layer[2].style.transform = "translate(" + X / 100 * 4 + 'px, ' + Y / 100 * 4 + 'px)'
    layer[3].style.transform = "translate(" + X / 100 * 6 + 'px, ' + Y / 100 * 6 + 'px)'
    layer[4].style.transform = "translate(" + X / 50 * 8 + 'px, ' + Y / 100 * 12 + 'px)'
    layer[5].style.transform = "translate(" + X / 100 * 10 + 'px, ' + Y / 100 * 10 + 'px)'
    layer[6].style.transform = "translate(" + X / 100 * 2 + 'px, ' + Y / 60 * 20 + 'px)'
}