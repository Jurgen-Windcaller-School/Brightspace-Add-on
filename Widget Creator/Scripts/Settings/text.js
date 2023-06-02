let widgetText = document.getElementById("widgetTitle");

function changeTextAlignment(radio) 
{ 
    if (radio.checked)
    {
        widgetText.style["text-align"] = radio.value; 
        // console.log(widgetText.style["text-align"]);
    }
}