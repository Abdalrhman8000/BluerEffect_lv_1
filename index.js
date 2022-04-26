const body = document.querySelector('body');
const currentBluer = getComputedStyle(body).getPropertyValue('--bluer');
const span = body.children[0];
let start = 100;
let blurStart = 100;

function bluerTimer() {
    start > 0 ? start-- : false;
    blurStart > 0 ? blurStart-- : false;
    document.documentElement.style.setProperty('--bluer', `${blurStart}px`);
    span.innerText = start + '%';
    let timer = setTimeout(bluerTimer, 20);
    start == 0 ? clearTimeout(timer) : false;
    start == 0 ? span.style.opacity = start : false;
}
bluerTimer();