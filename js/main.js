var state = false;
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var close = document.getElementById("close");
var sidenav = document.getElementsByClassName("sidenav")[0];
var outer = document.getElementById("outerWrapper");
var int1, int2;

function btn() {
    var pos1 = line1.getAttribute("y2");
    var pos2 = line2.getAttribute("y2");
    if (state === false) {
        sidenav.style.width = "300px";
        state = true;

        close.style.opacity = 0;

        int1 = setInterval(function () {
            if (pos1 > 48) {
                clearInterval(int1);
            }
            pos1++;
            line1.setAttribute("y2", pos1);
        }, 8);
        int2 = setInterval(function () {
            if (pos2 < 12) {
                clearInterval(int2);
            }
            pos2--;
            line2.setAttribute("y2", pos2);
        }, 8);
        
        
    } else if (state === true) {
        sidenav.style.width = "0";
        state = false;

        close.style.opacity = 100;

        int1 = setInterval(function () {
            if (pos1 < 12) {
                clearInterval(int1);
            }
            pos1--;
            line1.setAttribute("y2", pos1);
        }, 8);
        int2 = setInterval(function () {
            if (pos2 > 48) {
                clearInterval(int2);
            }
            pos2++;
            line2.setAttribute("y2", pos2);
        }, 8);

    }
}

function sideScroll(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start"});
}

