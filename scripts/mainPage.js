document.addEventListener("DOMContentLoaded", function () {
    var backgrounds = [document.querySelector(`.projects_background--1`),
    document.querySelector(`.projects_background--2`),
    document.querySelector(`.projects_background--3`)]


    if (window.innerWidth > 768) {
    var i = 1;
    setInterval(function () {
        var fadeOut = backgrounds[i];

        fadeOut.style.opacity = "1";
        for(var j=0;j<backgrounds.length;j++) {
            if (i != j) {
            backgrounds[j].style.opacity = "0"; }
        }
       
        
        i++;
        if (i > 2) {
            
            i = 0;
        }
    }, 7000);
    }
})

