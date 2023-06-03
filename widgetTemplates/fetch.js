search = window.location.href;
search = search.split('?')[1];
console.log(search);
settings = JSON.parse('{"' + search.replace(/&/g, '", "').replace(/=/g, '":"') + '"}', function(key, value) { return key === "" ? value : decodeURIComponent(value)});
// settings = JSON.parse(settings);
document.title = settings.name;
console.log(settings);
document.documentElement.style.setProperty('--widgetColour', settings.bgCol);
document.documentElement.style.setProperty('--primaryTextColour', settings.mainTextCol);
document.documentElement.style.setProperty('--secondaryTextColour', settings.secTextCol);

if (getComputedStyle(document.documentElement).getPropertyValue('--widgetSize') == "portrait") {
    document.documentElement.style.setProperty('--textScalar', "0.65");
    document.documentElement.style.setProperty('--widgetSize', "portrait");
} else if (getComputedStyle(document.documentElement).getPropertyValue('--widgetSize') == "landscape") {
    document.documentElement.style.setProperty('--textScalar', "0.85");
    document.documentElement.style.setProperty('--widgetSize', "landscape");
} else if (getComputedStyle(document.documentElement).getPropertyValue('--widgetSize') == "square") {
    document.documentElement.style.setProperty('--textScalar', "1");
    document.documentElement.style.setProperty('--widgetSize', "square");
}

document.documentElement.style.setProperty('--titleAlign', settings.titleAlign);
document.documentElement.style.setProperty('--titleTextSize', settings.titleTextSize);
document.documentElement.style.setProperty('--mainTextSize', settings.mainTextSize);

document.getElementById('widgetTitle').innerHTML = settings.titleTextContent;
document.getElementById('widgetPlaceholder').innerHTML = settings.bodyTextContent;