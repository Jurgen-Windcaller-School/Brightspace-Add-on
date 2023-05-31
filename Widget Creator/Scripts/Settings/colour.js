colorPickerBG = document.getElementById('colourPickerInput-bg');
colorPickerBG.addEventListener("change", bgColPick, false);

colorPickerH = document.getElementById('colourPickerInput-htext');
colorPickerH.addEventListener("change", hColPick, false);

colorPickerP = document.getElementById('colourPickerInput-ptext');
colorPickerP.addEventListener("change", pColPick, false);

function bgColPick(event) {
    document.documentElement.style.setProperty('--widgetColour', event.target.value);
}

function hColPick(event) {
    document.documentElement.style.setProperty('--primaryTextColour', event.target.value);
}

function pColPick(event) {
    document.documentElement.style.setProperty('--secondaryTextColour', event.target.value);
}