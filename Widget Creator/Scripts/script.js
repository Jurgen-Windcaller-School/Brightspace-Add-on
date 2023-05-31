let widget = document.getElementById("widget");
let widgetText = document.getElementById("widgetTitle");

let textValuePicker = document.getElementById("textValuePicker");

// let alignment = document.querySelectorAll('input[name="alignment"]');
// let prevAlignment = null;

// alignment = Array.from(alignment);

// alignment.forEach((elem) => {
//     elem.addEventListener("change", function() {
//         (prevAlignment) ? console.log(prevAlignment.value): null;
//         if (this !== prevAlignment) {
//             prevAlignment = this;
//         }
//         console.log(this.name + " " + this.value);
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    textValuePicker.onchange = changeTextValue;
}, false);

function changeTextValue(event) { widgetText.textContent = event.target.value; }
function changeTextAlignment(alignment) { widgetText.style["text-align"] = alignment; }

function showSetting(settingID)
{
    let settingTabs = document.getElementsByClassName("tabSettingContainer");
    settingTabs = Array.from(settingTabs);

    settingTabs.forEach(element => {
        if (element.id != settingID) { element.style["display"] = "none"; }
        else { element.style["display"] = "block"; }
    });

    let newTab = document.getElementById("customTabButton");
    let newTabText = document.getElementById("customTabText");

    let newTabHR = document.getElementById("customTabHR");
    let settingTabHR = document.getElementById("settingTabHR");

    if (settingID != "settingsTab")
    {
        newTab.style["display"] = "block";

        newTabHR.style["border-color"] = "#79C6FB";
        settingTabHR.style["border-color"] = "#919191";

        newTab.addEventListener("click", () => showSetting(settingID));

        newTabText.textContent = settingID.charAt(0).toUpperCase() + settingID.slice(1, -3);
    }
    else 
    {
        newTabHR.style["border-color"] = "#919191";
        settingTabHR.style["border-color"] = "#79C6FB";
    }
}