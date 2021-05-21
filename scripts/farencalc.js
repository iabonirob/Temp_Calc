"use strict";


window.onload = function () {
    //connect calcaddBtn
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked (){
    // Get payRate of employee from <input> field
    const farenheitField = document.getElementById("Farenheit");
    let farenheit = Number(farenheitField.value);

    let answer = (farenheit - 32) * (5/9); 

    
    //Generate output for gross pay and display in <p id="results">
    const celsiusField = document.getElementById("Celsius");
    celsiusField.value = answer;
}
