let widgetText = document.getElementById("widgetTitle");
let placeholderText = document.getElementById("widgetPlaceholder");

settings = {
    titleLen: 15,
    textLen: 185,
}

keys = {
    'backspace': 8,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'delete': 46,
    // 'cmd':
    'leftArrow': 37,
    'upArrow': 38,
    'rightArrow': 39,
    'downArrow': 40,
}

utils = {
    special: {},
    navigational: {},
    isSpecial(e) {
        return typeof this.special[e.keyCode] !== 'undefined';
    },
    isNavigational(e) {
        return typeof this.navigational[e.keyCode] !== 'undefined';
    }
}

utils.special[keys['backspace']] = true;
utils.special[keys['shift']] = true;
utils.special[keys['ctrl']] = true;
utils.special[keys['alt']] = true;
utils.special[keys['delete']] = true;

utils.navigational[keys['upArrow']] = true;
utils.navigational[keys['downArrow']] = true;
utils.navigational[keys['leftArrow']] = true;
utils.navigational[keys['rightArrow']] = true;

widgetText.addEventListener('keydown', titleLengthRestrictor);
placeholderText.addEventListener('keydown', bodyLengthRestrictor);

function titleLengthRestrictor(event) {
    let len = event.target.innerText.trim().length;
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.titleLen && !hasSelection) {
        event.preventDefault();
        return false;
    }
}

function bodyLengthRestrictor(event) {
    let len = event.target.innerText.trim().length;
    let hasSelection = false;
    let selection = window.getSelection();
    let isSpecial = utils.isSpecial(event);
    let isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.textLen && !hasSelection) {
        event.preventDefault();
        return false;
    }
}

function changeTextAlignment(radio) 
{ 
    if (radio.checked)
    {
        document.documentElement.style.setProperty('--titleAlign', radio.value); 
    }
}

let titleSize = document.getElementById("titleSize");
let placeholderSize = document.getElementById("placeholderSize");

titleSize.addEventListener("change", changeTitleTextSize);
placeholderSize.addEventListener("change", changeSecTextSize);

function changeTitleTextSize(event) { 
    document.documentElement.style.setProperty('--titleTextSize', event.target.value / 3 + 'vw');
}
function changeSecTextSize(event) { 
    document.documentElement.style.setProperty('--bodyTextSize', event.target.value / 3 + 'vw');
}