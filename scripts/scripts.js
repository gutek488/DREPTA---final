document.addEventListener("DOMContentLoaded", function(){
    var scroll = new SmoothScroll('a[href*="#"]');

    var mobileMenu = document.querySelector(".header-mobile_menu");
    var hamburger = document.querySelector(".menu-btn");
    var header = document.querySelector('header');
    var anchors = document.querySelectorAll('a[href*="#"]');
    var lastScroll = 0;

    for (var x of anchors) {
        x.addEventListener('click', function() {
            mobileMenu.classList.remove("header-mobile_menu--active");
        }
            )
    }

    hamburger.addEventListener("click", function(){
        if (mobileMenu.classList.contains('nocontact')) {
            mobileMenu.classList.toggle("header-mobile_menu-nocontact--active");
        } else {
        mobileMenu.classList.toggle("header-mobile_menu--active");
        }
    })

    function displayHeader() {
        header.style.height = "60px";
        header.style.overflow = "visible";
    }
        
       
    document,addEventListener("scroll", function() {
        console.log("windowScroll:" + window.pageYOffset);
        console.log(lastScroll);
        if (window.pageYOffset > lastScroll) {
        header.style.height ="0";
        header.style.overflow = "hidden"; 
        mobileMenu.classList.remove("header-mobile_menu--active");
        }

        else {
            displayHeader();
        }
        lastScroll = window.pageYOffset;
    })
})