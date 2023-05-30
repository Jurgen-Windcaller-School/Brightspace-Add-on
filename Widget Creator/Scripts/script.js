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
        newTabHR.style["border-color"] = "blue";
        settingTabHR.style["border-color"] = "black";

        newTab.addEventListener("click", () => showSetting(settingID));

        newTabText.textContent = settingID.charAt(0).toUpperCase() + settingID.slice(1, -3);
    }
    else 
    {
        newTabHR.style["border-color"] = "black";
        settingTabHR.style["border-color"] = "blue";
    }
}