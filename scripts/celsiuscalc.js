"use strict";


window.onload = function () {
   //connect button converBtn
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked (){
    // Get celsius tempeture from <input> field
    const celsiusField = document.getElementById("Celsius");
    let celsius = Number(celsiusField.value);

    let answer = (celsius * 9/5) + 32


    
    //Displays the value in faremheit in the input
    const farenheitField = document.getElementById("Farenheit");
    farenheitField.value = answer;
}
