document.addEventListener("DOMContentLoaded", function () {
    var basic = document.querySelectorAll(".offert_description");
    var more = document.querySelector(".offert_more");
    var moreMobile = document.querySelectorAll(".offert_more--mobile");
    var extended = document.querySelectorAll(".offert_extended");
    var check = 0;
    var btnsArr = Array.prototype.slice.call(moreMobile);

    more.addEventListener("click", function () {
        this.classList.toggle('active');
        if (check == 0) {

            for (let x of basic) {

                x.style.opacity = "0";
                setTimeout(function () {
                    x.style.height = "0";
                    for (let y of extended) {
                        y.style.height = "850px";
                        setTimeout(function () {
                            y.style.opacity = "1";
                        }, 600)
                    }
                }, 500)
            }
            check = 1;
        } else {
            for (let x of extended) {

                x.style.opacity = "0";
                setTimeout(function () {
                    x.style.height = "0";
                    for (let y of basic) {
                        y.style.height = "180px";

                        setTimeout(function () {
                            y.style.opacity = "1";



                        }, 600)
                    }
                }, 500)
            }
            check = 0;
        }
    })
    for (x of moreMobile) {

        x.addEventListener("click", function (event) {
            this.classList.toggle('active');
            let that = event.target;
            var basicOne = this.parentElement.querySelector('.offert_description');
            var extendedOne = this.parentElement.querySelector('.offert_extended');



            if (basicOne.style.opacity != "0") {


                basicOne.style.opacity = "0";
                basicOne.style.height = "0";


                setTimeout(function () {
                    if (btnsArr.indexOf(that) == 0) {
                        extendedOne.style.height = "330px"
                    } else if (btnsArr.indexOf(that) == 1) {
                        extendedOne.style.height = "511px"

                    } else {
                        extendedOne.style.height = "840px"

                    }
                    setTimeout(function () {
                        extendedOne.style.opacity = "1";
                    }, 500)

                }, 1000);
            } else {


                extendedOne.style.opacity = "0";
                extendedOne.style.height = "0";

                setTimeout(function () {
                    basicOne.style.height = "180px";

                    setTimeout(function () {
                        basicOne.style.opacity = "1";



                    }, 500)

                }, 1000);
            }
        })
    }





})