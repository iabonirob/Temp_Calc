"use strict";


window.onload = function () {
    //connect button converBtn
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked (){
    // Get farenheit tempeture from <input> field
    const farenheitField = document.getElementById("Farenheit");
    let farenheit = Number(farenheitField.value);

    let celsius = (farenheit - 32) * (5/9); 

    
    //Displays the value in celsius in the input
    const celsiusField = document.getElementById("Celsius");
    celsiusField.value = celsius;
}
