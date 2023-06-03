var settingsList = {
    'name' : document.getElementById('widgetName').value,
    
    'bgCol' : getComputedStyle(document.documentElement).getPropertyValue('--widgetColour'),
    'mainTextCol' : getComputedStyle(document.documentElement).getPropertyValue('--primaryTextColour'),
    'secTextCol' : getComputedStyle(document.documentElement).getPropertyValue('--secondaryTextColour'),

    'size' : 'square',

    'titleAlign' : getComputedStyle(document.documentElement).getPropertyValue('--titleAlign'),
    'titleTextSize' : getComputedStyle(document.documentElement).getPropertyValue('--titleTextSize'),
    'mainTextSize' : getComputedStyle(document.documentElement).getPropertyValue('--bodyTextSize'),

    'titleTextContent' : document.getElementById('widgetTitle').innerHTML,
    'bodyTextContent' : document.getElementById('widgetPlaceholder').innerHTML,

    'function' : '',
};

function saveCode() {
    settingsList = {
        'name' : document.getElementById('widgetName').value,
        
        'bgCol' : getComputedStyle(document.documentElement).getPropertyValue('--widgetColour'),
        'mainTextCol' : getComputedStyle(document.documentElement).getPropertyValue('--primaryTextColour'),
        'secTextCol' : getComputedStyle(document.documentElement).getPropertyValue('--secondaryTextColour'),

        'size' : 'square',

        'titleAlign' : getComputedStyle(document.documentElement).getPropertyValue('--titleAlign'),
        'titleTextSize' : getComputedStyle(document.documentElement).getPropertyValue('--titleTextSize'),
        'mainTextSize' : getComputedStyle(document.documentElement).getPropertyValue('--bodyTextSize'),

        'titleTextContent' : document.getElementById('widgetTitle').innerHTML,
        'bodyTextContent' : document.getElementById('widgetPlaceholder').innerHTML,

        'function' : '',
    };

    console.log(settingsList);
    document.getElementById("saveStatusUpdates").className = "saveActive";
    setTimeout(()=> {
        document.getElementById("saveStatusUpdates").className = "saveInactive";
     }
     ,3000);
}

function exportCode() {
    saveCode();
    var s = "";
    for (var key in settingsList) {
        if (s != "") {
            s += "&";
        }
        s += (key + "=" + encodeURIComponent(settingsList[key]));
    }
    console.log("http://127.0.0.1:3000/Widget%20Templates/generator.htm/?" + s);

    // search = window.location.href + "/?" + s;
    // search = search.split('?')[1];

    // console.log(JSON.parse('{"' + search.replace(/&/g, '", "')
    //         .replace(/=/g, '":"') + '"}',
    //     function(key, value) {
    //     return key === "" ? value : decodeURIComponent(value)
    //     }));
}

// C: 0.07
// M: 90.12
// Y: 84.95
// K: 0

// ______

// C: 0
// M: 68.95
// Y: 47.24
// K: 0