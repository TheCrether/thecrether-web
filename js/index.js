var res = document.getElementById('result');
var sub = document.getElementById('sub');
var form = document.getElementsByTagName('form')[0];

document.getElementById("sub").addEventListener("click", () => {
    setTimeout(function() {
        res.style.opacity = 100;
        res.style.height = "85px";
    }, 1000);
    form.style.padding = 0;
    form.style.opacity = 0;
    form.style.height = 0;
});
