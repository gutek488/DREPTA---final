document.addEventListener("DOMContentLoaded", function () {
    var background = document.querySelector(".projects");
    var backgroundImgs = ["./img/projekty-wizualizacje/4 kąty na Warsz. Pradze/1.jpg",
        "./img/projekty-wizualizacje/Minimalistyczne glamour/SALON2.jpg",
        "./img/projekty-wizualizacje/Nowoczesność i elegancja/SALON2.jpg",
        "../img/tlo5-min.png", 
    ];
    var i = 0;
    setInterval(function () {

        background.style.backgroundImage = `url('${backgroundImgs[i]}')`;
        i++;
        if (i > 2) {
            i = 0
        }
    }, 7000);

})