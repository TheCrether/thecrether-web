let usernames = ["TINFisToll", "lol"];
let passwords = ["stimmt", "l"];

document.getElementById("loginForm").addEventListener("submit", () => {
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "none";
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userIndex = usernames.indexOf(username);
    let user = usernames[userIndex];
    let pass = passwords[userIndex];
    if(!(password == pass)){
        document.getElementById("error").style.display = "block";
    }
    else {
        setTimeout(() => {
            document.getElementById("success").style.display = "block";
        }, 1000)
        document.getElementsByClassName("form")[0].style.opacity = 0;
        document.getElementsByClassName("form")[0].style.height = 0;
    }
});

function bmi() {
    let kg = document.getElementById("kg").value;
    let m = document.getElementById("m").value;
    let res = kg / Math.pow(m, 2);
    document.getElementById("bmitext").value = res;
}

