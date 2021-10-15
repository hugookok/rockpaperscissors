import * as mytingz from './myFunctions.js';

document.getElementById("startbutton").addEventListener("click", openpage);

function openpage() {
    console.log('openpage');
    window.open("./spillside.html", "MyWindow");
    mytingz.regneut(1,2);
}
    