"use strict";


window.onload = function () {
    //connect calcaddBtn
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked (){
    // Get payRate of employee from <input> field
    const celsiusField = document.getElementById("Celsius");
    let celsius = Number(celsiusField.value);

    let answer = (celsius * 9/5) + 32


    
    //Generate output for gross pay and display in <p id="results">
    const farenheitField = document.getElementById("Farenheit");
    farenheitField.value = answer;
}
