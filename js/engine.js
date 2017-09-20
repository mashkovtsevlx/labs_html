var a = 1;
function s_button(num) {
    "use strict";
    var slider = document.getElementById('slider'), s1 = document.getElementById('s_1'), s2 = document.getElementById('s_2'), s3 = document.getElementById('s_3');
    if (num === 1) {
        s1.style.background = "#e3e3e3";
        s2.style.background = "white";
        s3.style.background = "white";
        slider.innerHTML = '<a href="q50.html"><img src="img/q50.jpg" alt="Infiniti Q50" /></a>';
        a = 1;
    } else if (num === 2) {
        s1.style.background = "#white";
        s2.style.background = "#e3e3e3";
        s3.style.background = "white";
        slider.innerHTML = '<a href="qx60.html"><img src="img/qx60.jpg" alt="Infiniti Q50" /></a>';
        a = 2;
    } else if (num === 3) {
        s1.style.background = "white";
        s2.style.background = "white";
        s3.style.background = "#e3e3e3";
        slider.innerHTML = '<a href="qx70.html"><img src="img/qx70.jpg" alt="Infiniti Q50" /></a>';
        a = 3;
    }
}
function s_next() {
    "use strict";
    var slider = document.getElementById('slider'), s1 = document.getElementById('s_1'), s2 = document.getElementById('s_2'), s3 = document.getElementById('s_3');
    if (a === 1) {
        s1.style.background = "#e3e3e3";
        s2.style.background = "white";
        s3.style.background = "white";
        slider.innerHTML = '<a href="q50.html"><img src="img/q50.jpg" alt="Infiniti Q50" /></a>';
        a = 2;
    } else if (a === 2) {
        s1.style.background = "#white";
        s2.style.background = "#e3e3e3";
        s3.style.background = "white";
        slider.innerHTML = '<a href="qx60.html"><img src="img/qx60.jpg" alt="Infiniti Q50" /></a>';
        a = 3;
    } else if (a === 3) {
        s1.style.background = "white";
        s2.style.background = "white";
        s3.style.background = "#e3e3e3";
        slider.innerHTML = '<a href="qx70.html"><img src="img/qx70.jpg" alt="Infiniti Q50" /></a>';
        a = 1;
    }
}

setInterval(s_next, 5000);