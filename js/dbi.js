var uebungen = [
    {"file": "uebung1.png", "number": 1},
    {"file": "uebung2.png", "number": 2},
    {"file": "uebung3.png", "number": 3},
    {"file": "uebung4.png", "number": 4},
    {"file": "uebung5.png", "number": 5},
    {"file": "uebung6.png", "number": 6},
    {"file": "uebung7.png", "number": 7},
    {"file": "uebung8.jpg", "number": 8}
]
const base = "/images/requirements/dbi/";
let index = 0;
var uBtns = document.querySelectorAll(".uBtn");

function changePhoto(change, i){
    if(change==0){
        index = i-1;
    }
    else{
        index += change;
    }    
    if (index == uebungen.length) index = 0;
    else if (index == -1) index = uebungen.length - 1;
    document.getElementById("image").src = base + uebungen[index].file;
    document.querySelector("#uHeader h1").textContent = "Übung " + uebungen[index].number;
}

document.querySelectorAll(".uBtn").forEach((elem) => {
    elem.addEventListener("click", () => {
        changeActive(elem);
    });
});

function changeActive(elem){
    var uID = elem.id[1];
    changePhoto(0, uID);
    document.querySelectorAll(".uBtn").forEach(btn => {
        if(btn.className.includes("uBtn-active")){
            btn.className="uBtn";
        }
    });
    elem.className = "uBtn uBtn-active";
}