var sizeInput = document.getElementById("sizeInput");
sizeInput.addEventListener("change", resizeWidget, false);

function resizeWidget(event) {
    if (event.target.value == "portrait") {
        document.documentElement.style.setProperty('--widgetHeight', "30vw");
        document.documentElement.style.setProperty('--widgetWidth', "20vw");
        document.documentElement.style.setProperty('--textScalar', "0.65");
    } else if (event.target.value == "landscape") {
        document.documentElement.style.setProperty('--widgetHeight', "20vw");
        document.documentElement.style.setProperty('--widgetWidth', "30vw");
        document.documentElement.style.setProperty('--textScalar', "0.85");
    } else if (event.target.value == "square") {
        document.documentElement.style.setProperty('--widgetHeight', "30vw");
        document.documentElement.style.setProperty('--widgetWidth', "30vw");
        document.documentElement.style.setProperty('--textScalar', "1");
    }
}
