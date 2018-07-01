var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    console.log(this);

    circle.classList.add('ripple');
}

window.sr = ScrollReveal();

sr.reveal('#project01', {
    origin: 'left',
    distance: '50px',
    duration: 500,
    delay: 0,
    opacity: 0
});

sr.reveal('#project02', {
    origin: 'left',
    distance: '50px',
    duration: 500,
    delay: 250,
    opacity: 0
});

sr.reveal('#project03', {
    origin: 'left',
    distance: '50px',
    duration: 500,
    delay: 0,
    opacity: 0
});

sr.reveal('nav #logo', {
    origin: 'left',
    distance: '50px',
    duration: 500,
    delay: 250,
    opacity: 0
});

sr.reveal('.hero h1', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 500,
    opacity: 0
});

sr.reveal('.hero h2', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 750,
    opacity: 0
});

